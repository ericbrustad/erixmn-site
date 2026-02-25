import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, parse } from "path";

const INPUT_DIR = "public/images";
const OUTPUT_DIR = "public/images/optimized";
const MAX_WIDTH = 1920;
const QUALITY = 75;

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter(
  (f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && !f.startsWith(".")
);

for (const file of files) {
  const input = join(INPUT_DIR, file);
  const { name } = parse(file);
  const output = join(OUTPUT_DIR, `${name}.webp`);

  try {
    const meta = await sharp(input).metadata();
    const pipeline = sharp(input);

    // Resize only if wider than MAX_WIDTH
    if (meta.width > MAX_WIDTH) {
      pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: QUALITY }).toFile(output);

    const origSize = (await sharp(input).metadata()).size || 0;
    const { size: newSize } = await sharp(output).metadata();
    console.log(
      `✓ ${file} → ${name}.webp | ${Math.round(origSize / 1024)}KB → ${Math.round(
        (newSize || 0) / 1024
      )}KB`
    );
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log("\nDone! Optimized images in", OUTPUT_DIR);

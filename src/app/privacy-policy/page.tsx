import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Erix Coach and Car Transportation",
  description:
    "Privacy Policy for Erix Coach and Car Transportation. No information is shared or sold.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-darker rounded-xl border border-white/5 p-8 sm:p-12">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              No information is shared or sold.
            </p>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                Erix Coach and Car Transportation is committed to protecting
                your privacy. Any information collected through our website or
                booking system is used solely for the purpose of providing our
                transportation services.
              </p>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. Your data is kept secure
                and confidential.
              </p>
              <p>
                For questions about our privacy practices, please contact us at{" "}
                <a
                  href="mailto:info@erixmn.com"
                  className="text-gold hover:underline"
                >
                  info@erixmn.com
                </a>
                .
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-2 text-sm text-gray-500">
              <p>
                A{" "}
                <a
                  href="https://twincitiesluxurytransportation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  TwinCitiesLuxuryTransportation.com
                </a>{" "}
                company.
              </p>
              <p>
                An{" "}
                <a
                  href="https://mspsuv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  MSPSUV.com
                </a>{" "}
                affiliate.
              </p>
              <p>
                A{" "}
                <a
                  href="https://ridethex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  RidetheX.com
                </a>{" "}
                Provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

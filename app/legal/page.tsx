"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/lib/language-context"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terms")
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        title={t("legal.title")}
        subtitle={t("legal.subtitle")}
        description={t("legal.description")}
        showCta={false}
      />

      <div className="py-16 px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
        <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-12 border border-white/10">
          <Tabs defaultValue="terms" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-black/20">
              <TabsTrigger value="terms" className="text-base">
                {t("legal.tabs.terms")}
              </TabsTrigger>
              <TabsTrigger value="cookies" className="text-base">
                {t("legal.tabs.cookies")}
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-base">
                {t("legal.tabs.privacy")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">{t("legal.terms.title")}</h1>
              <p className="text-lg text-white/90 italic mb-6">{t("legal.terms.subtitle")}</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.definitions.title")}</h2>
                  <p>{t("legal.terms.sections.definitions.items.provider")}</p>
                  <p>{t("legal.terms.sections.definitions.items.beneficiary")}</p>
                  <p>{t("legal.terms.sections.definitions.items.services")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.contractObject.title")}</h2>
                  <p>{t("legal.terms.sections.contractObject.items.providerObligation")}</p>
                  <p>{t("legal.terms.sections.contractObject.items.beneficiaryObligation")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.delivery.title")}</h2>
                  <p>{t("legal.terms.sections.delivery.items.deliveryTerm")}</p>
                  <p>{t("legal.terms.sections.delivery.items.deliveryMethod")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.payment.title")}</h2>
                  <p>{t("legal.terms.sections.payment.items.paymentMethod")}</p>
                  <p>{t("legal.terms.sections.payment.items.advance")}</p>
                  <p>{t("legal.terms.sections.payment.items.penalties")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.intellectualProperty.title")}</h2>
                  <p>{t("legal.terms.sections.intellectualProperty.items.copyrightOwnership")}</p>
                  <p>{t("legal.terms.sections.intellectualProperty.items.rightsTransfer")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.responsibilities.title")}</h2>
                  <p>{t("legal.terms.sections.responsibilities.items.forceMajeure")}</p>
                  <p>{t("legal.terms.sections.responsibilities.items.beneficiaryResponsibility")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.cancellations.title")}</h2>
                  <p>{t("legal.terms.sections.cancellations.items.earlyCancel")}</p>
                  <p>{t("legal.terms.sections.cancellations.items.lateCancel")}</p>
                  <p>{t("legal.terms.sections.cancellations.items.modifications")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.confidentiality.title")}</h2>
                  <p>{t("legal.terms.sections.confidentiality.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.terms.sections.applicableLaw.title")}</h2>
                  <p>{t("legal.terms.sections.applicableLaw.items.law")}</p>
                  <p>{t("legal.terms.sections.applicableLaw.items.disputes")}</p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="cookies" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">{t("legal.cookies.title")}</h1>
              <p className="text-lg text-white/90 italic mb-6">{t("legal.cookies.subtitle")}</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.cookies.sections.whatAreCookies.title")}</h2>
                  <p>{t("legal.cookies.sections.whatAreCookies.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.cookies.sections.cookieTypes.title")}</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium text-white">{t("legal.cookies.sections.cookieTypes.items.strictlyNecessary.title")}</span> {t("legal.cookies.sections.cookieTypes.items.strictlyNecessary.description")}
                    </li>
                    <li>
                      <span className="font-medium text-white">{t("legal.cookies.sections.cookieTypes.items.functional.title")}</span> {t("legal.cookies.sections.cookieTypes.items.functional.description")}
                    </li>
                    <li>
                      <span className="font-medium text-white">{t("legal.cookies.sections.cookieTypes.items.analytical.title")}</span> {t("legal.cookies.sections.cookieTypes.items.analytical.description")}
                    </li>
                    <li>
                      <span className="font-medium text-white">{t("legal.cookies.sections.cookieTypes.items.marketing.title")}</span> {t("legal.cookies.sections.cookieTypes.items.marketing.description")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.cookies.sections.consentManagement.title")}</h2>
                  <p>{t("legal.cookies.sections.consentManagement.items.firstVisit")}</p>
                  <p>{t("legal.cookies.sections.consentManagement.items.preferences")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.cookies.sections.storageDuration.title")}</h2>
                  <p>{t("legal.cookies.sections.storageDuration.content")}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t("legal.cookies.sections.storageDuration.items.session")}</li>
                    <li>{t("legal.cookies.sections.storageDuration.items.persistent")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.cookies.sections.contact.title")}</h2>
                  <p>{t("legal.cookies.sections.contact.content")}</p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="text-white/80 space-y-6">
              <h1 className="text-3xl font-bold text-white mb-6">{t("legal.privacy.title")}</h1>
              <p className="text-lg text-white/90 italic mb-6">{t("legal.privacy.subtitle")}</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.dataOperator.title")}</h2>
                  <p>{t("legal.privacy.sections.dataOperator.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.dataCollected.title")}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse my-4">
                      <thead>
                        <tr className="bg-[#2A2A2A]">
                          <th className="border border-white/20 p-3 text-left">{t("legal.privacy.sections.dataCollected.table.headers.dataCollected")}</th>
                          <th className="border border-white/20 p-3 text-left">{t("legal.privacy.sections.dataCollected.table.headers.purpose")}</th>
                          <th className="border border-white/20 p-3 text-left">{t("legal.privacy.sections.dataCollected.table.headers.legalBasis")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.personalData.data")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.personalData.purpose")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.personalData.basis")}</td>
                        </tr>
                        <tr className="bg-[#1E1E1E]">
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.contactData.data")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.contactData.purpose")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.contactData.basis")}</td>
                        </tr>
                        <tr>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.addressData.data")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.addressData.purpose")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.addressData.basis")}</td>
                        </tr>
                        <tr className="bg-[#1E1E1E]">
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.mediaData.data")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.mediaData.purpose")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.mediaData.basis")}</td>
                        </tr>
                        <tr>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.navigationData.data")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.navigationData.purpose")}</td>
                          <td className="border border-white/20 p-3">{t("legal.privacy.sections.dataCollected.table.rows.navigationData.basis")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.dataRetention.title")}</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t("legal.privacy.sections.dataRetention.items.clientData")}</li>
                    <li>{t("legal.privacy.sections.dataRetention.items.mediaFiles")}</li>
                    <li>{t("legal.privacy.sections.dataRetention.items.cookieData")}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.dataSubjectRights.title")}</h2>
                  <p>{t("legal.privacy.sections.dataSubjectRights.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.dataSecurity.title")}</h2>
                  <p>{t("legal.privacy.sections.dataSecurity.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.internationalTransfer.title")}</h2>
                  <p>{t("legal.privacy.sections.internationalTransfer.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.policyChanges.title")}</h2>
                  <p>{t("legal.privacy.sections.policyChanges.content")}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">{t("legal.privacy.sections.contactComplaints.title")}</h2>
                  <p>{t("legal.privacy.sections.contactComplaints.content")}</p>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">{t("legal.lastUpdated")}</p>
        </div>
      </div>
    </>
  )
}

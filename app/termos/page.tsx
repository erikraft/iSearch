"use client"

import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "@/lib/i18n"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>{t("back")}</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("terms")}</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            {t("last_updated")}: 20 {t("may")} 2025
          </p>

          <h2>1. {t("terms_acceptance")}</h2>
          <p>{t("welcome_terms")}</p>

          <h2>2. {t("service_description")}</h2>
          <p>{t("service_description_text")}</p>

          <h2>3. {t("service_use")}</h2>
          <p>{t("legal_use")}</p>
          <ul>
            <li>{t("illegal_use")}</li>
            <li>{t("unauthorized_access")}</li>
            <li>{t("service_interference")}</li>
            <li>{t("security_bypass")}</li>
            <li>{t("malware_distribution")}</li>
            <li>{t("user_info_collection")}</li>
          </ul>

          <h2>4. {t("user_accounts")}</h2>
          <p>{t("account_responsibility")}</p>

          <h2>5. {t("intellectual_property")}</h2>
          <p>{t("ip_ownership")}</p>
          <p>{t("no_copy")}</p>

          <h2>6. {t("third_party_content")}</h2>
          <p>{t("third_party_disclaimer")}</p>

          <h2>7. {t("warranty_disclaimer")}</h2>
          <p>{t("as_is_service")}</p>

          <h2>8. {t("liability_limitation")}</h2>
          <p>{t("no_liability")}</p>
          <ul>
            <li>{t("access_inability")}</li>
            <li>{t("third_party_conduct")}</li>
            <li>{t("content_obtained")}</li>
            <li>{t("unauthorized_access_use")}</li>
          </ul>

          <h2>9. {t("terms_changes")}</h2>
          <p>{t("modify_terms")}</p>

          <h2>10. {t("applicable_law")}</h2>
          <p>{t("governing_law")}</p>

          <h2>11. {t("contact")}</h2>
          <p>{t("terms_questions")}</p>
          <p>Email: erikraft43@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

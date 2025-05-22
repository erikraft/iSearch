"use client"

import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "@/lib/i18n"

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("privacy")}</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            {t("last_updated")}: 20 {t("may")} 2025
          </p>

          <h2>1. {t("introduction")}</h2>
          <p>{t("privacy_welcome")}</p>
          <p>{t("privacy_value")}</p>

          <h2>2. {t("information_collect")}</h2>
          <p>
            <strong>{t("information_provide")}:</strong> {t("information_provide_description")}
          </p>
          <p>
            <strong>{t("information_automatic")}:</strong> {t("information_automatic_description")}
          </p>
          <ul>
            <li>{t("usage_info")}</li>
            <li>{t("device_info")}</li>
            <li>{t("location_info")}</li>
            <li>{t("cookies_info")}</li>
          </ul>

          <h2>3. {t("how_use_information")}</h2>
          <p>{t("use_information_intro")}:</p>
          <ul>
            <li>{t("provide_service")}</li>
            <li>{t("personalize_experience")}</li>
            <li>{t("develop_features")}</li>
            <li>{t("protect_security")}</li>
            <li>{t("legal_obligations")}</li>
          </ul>

          <h2>4. {t("information_sharing")}</h2>
          <p>{t("not_sell_info")}</p>
          <ul>
            <li>{t("service_providers")}</li>
            <li>{t("legal_requirements")}</li>
            <li>{t("protect_rights")}</li>
            <li>{t("business_transfers")}</li>
          </ul>

          <h2>5. {t("your_choices")}</h2>
          <p>{t("rights_intro")}:</p>
          <ul>
            <li>{t("access_correct")}</li>
            <li>{t("opt_out")}</li>
            <li>{t("disable_cookies")}</li>
            <li>{t("data_portability")}</li>
          </ul>
          <p>{t("exercise_rights")}</p>

          <h2>6. {t("data_security")}</h2>
          <p>{t("security_measures")}</p>

          <h2>7. {t("data_retention")}</h2>
          <p>{t("retention_policy")}</p>

          <h2>8. {t("children")}</h2>
          <p>{t("children_policy")}</p>

          <h2>9. {t("policy_changes")}</h2>
          <p>{t("update_policy")}</p>

          <h2>10. {t("contact")}</h2>
          <p>{t("questions_concerns")}</p>
          <p>Email: erikraft43@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

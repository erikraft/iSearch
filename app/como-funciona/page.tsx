"use client"

import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "@/lib/i18n"

export default function HowItWorksPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("how_it_works")}</h1>

        <div className="prose dark:prose-invert max-w-none">
          <h2>{t("overview")}</h2>
          <p>{t("overview_description")}</p>

          <h2>{t("main_features")}</h2>

          <h3>1. {t("multiple_search_engines")}</h3>
          <p>{t("multiple_engines_description")}</p>

          <h3>2. {t("unified_interface")}</h3>
          <p>{t("unified_interface_description")}</p>

          <h3>3. {t("tab_system")}</h3>
          <p>{t("tab_system_description")}</p>
        </div>
      </div>
    </div>
  )
}

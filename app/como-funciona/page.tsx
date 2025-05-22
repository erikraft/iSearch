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

          <h3>4. {t("advanced_search")}</h3>
          <p>{t("advanced_search_intro")}</p>
          <ul>
            <li>
              <strong>{t("voice_search")}:</strong> {t("voice_search_description")}
            </li>
            <li>
              <strong>{t("image_search")}:</strong> {t("image_search_description")}
            </li>
            <li>
              <strong>{t("contextual_search")}:</strong> {t("contextual_search_description")}
            </li>
          </ul>

          <h3>5. {t("specialized_categories")}</h3>
          <p>{t("categories_intro")}</p>
          <ul>
            <li>
              <strong>{t("videos")}:</strong> {t("videos_description")}
            </li>
            <li>
              <strong>{t("shopping")}:</strong> {t("shopping_description")}
            </li>
            <li>
              <strong>{t("news")}:</strong> {t("news_description")}
            </li>
            <li>
              <strong>{t("maps")}:</strong> {t("maps_description")}
            </li>
          </ul>

          <h2>{t("how_to_use")}</h2>

          <h3>{t("basic_search")}</h3>
          <ol>
            <li>{t("basic_search_step1")}</li>
            <li>{t("basic_search_step2")}</li>
            <li>{t("basic_search_step3")}</li>
          </ol>

          <h3>{t("switch_engines")}</h3>
          <ol>
            <li>{t("switch_engines_step1")}</li>
            <li>{t("switch_engines_step2")}</li>
            <li>{t("switch_engines_step3")}</li>
          </ol>

          <h3>{t("manage_tabs")}</h3>
          <ol>
            <li>{t("manage_tabs_step1")}</li>
            <li>{t("manage_tabs_step2")}</li>
            <li>{t("manage_tabs_step3")}</li>
          </ol>

          <h2>{t("privacy")}</h2>
          <p>
            {t("privacy_statement")}{" "}
            <Link href="/privacidade" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t("privacy")}
            </Link>
            .
          </p>

          <h2>{t("feedback_support")}</h2>
          <p>{t("feedback_description")}</p>
        </div>
      </div>
    </div>
  )
}

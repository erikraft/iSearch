"use client"

import Link from "next/link"
import Image from "next/image"
import { FiArrowLeft } from "react-icons/fi"
import { useTranslation } from "@/lib/i18n"

export default function AboutPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("about")}</h1>

        <div className="prose dark:prose-invert max-w-none">
          <div className="flex justify-center mb-8">
            <div className="w-64">
              <Image
                src="/images/isearch-logo.png"
                alt="iSearch Logo"
                width={320}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2>{t("our_mission")}</h2>
          <p>{t("mission_description")}</p>

          <h2>{t("who_we_are")}</h2>
          <p>{t("team_description")}</p>

          <h2>{t("our_approach")}</h2>
          <p>{t("approach_description")}</p>

          <h2>{t("privacy_transparency")}</h2>
          <p>{t("privacy_description")}</p>
          <p>
            {t("privacy_more_info")}{" "}
            <Link href="/privacidade" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t("privacy")}
            </Link>
            .
          </p>

          <h2>{t("exclusive_features")}</h2>
          <p>{t("features_intro")}</p>
          <ul>
            <li>{t("feature_multiple_engines")}</li>
            <li>{t("feature_clean_interface")}</li>
            <li>{t("feature_voice_image")}</li>
            <li>{t("feature_themes")}</li>
            <li>{t("feature_tabs")}</li>
            <li>{t("feature_quick_access")}</li>
          </ul>

          <h2>{t("our_commitment")}</h2>
          <p>{t("commitment_description")}</p>

          <h2>{t("contact_us")}</h2>
          <p>{t("feedback_intro")}</p>
          <p>
            Email: erikraft43@gmail.com
            <br />
            Twitter: @ErikrafTbr
            <br />
            GitHub: github.com/erikraft/iSearch
          </p>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 iSearch. {t("all_rights_reserved")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

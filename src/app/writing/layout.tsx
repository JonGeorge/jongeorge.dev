import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import {SocialIcons} from "@/components/SocialIcons";
import {Logo} from "@/components/Logo";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-border)]">
        <div className="flex-col sm:flex-row mx-auto max-w-[860px] px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Logo className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] h-6 w-auto mt-5 mb-6 sm:mb-0 sm:mt-0"/>
          </Link>

            <div className="flex items-center gap-5 mb-3 sm:mb-0" aria-label="Social links">
                <div className="[&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-4 sm:[&_svg]:w-4">
                    <SocialIcons/>
                </div>
                <ThemeToggle className="[&_svg]:h-4 [&_svg]:w-4"/>
            </div>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-[860px] px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[860px] px-6 py-8 text-[var(--color-text-muted)] text-sm">
          &copy; {new Date().getFullYear()} Jon George. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ContactForm } from "@/components/home/contact/ContactForm";
import { ContactLinkPills } from "@/components/home/contact/ContactLinkPills";
import { ContactMessageCard } from "@/components/home/contact/ContactMessageCard";
import { useContactFormPanel } from "@/components/home/contact/use-contact-form-panel";
import {
  panelTransition,
  contactDesktopCardClass,
} from "@/components/home/contact/contact-config";
import { LANDING_SECTION_TITLE_CLASSNAME } from "@/lib/home-title-styles";

export function ContactSection() {
  const emailPillRef = useRef<HTMLAnchorElement>(null);
  const {
    isContactFormOpen,
    form,
    setForm,
    formAction,
    state,
    toggleContactForm,
  } = useContactFormPanel();
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  useEffect(() => {
    if (isDesktop || !isContactFormOpen || !emailPillRef.current) {
      return;
    }

    let firstFrameId = 0;
    let secondFrameId = 0;

    firstFrameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        const pillRect = emailPillRef.current?.getBoundingClientRect();
        const headerRect = document.querySelector("header")?.getBoundingClientRect();

        if (!pillRect || !headerRect) {
          return;
        }

        const desiredTop = headerRect.bottom + 6;
        const nextScrollTop = window.scrollY + pillRect.top - desiredTop;

        window.scrollTo({
          top: nextScrollTop,
          behavior: "smooth",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrameId);
      window.cancelAnimationFrame(secondFrameId);
    };
  }, [isContactFormOpen, isDesktop]);

  const contactForm = (
    <ContactForm
      values={form}
      onValuesChange={setForm}
      formAction={formAction}
      state={state}
      isDesktop={isDesktop}
      isOpen={isContactFormOpen}
    />
  );

  const socialGrid = (
    <div className="flex w-full flex-col gap-3 md:gap-3.5">
      <ContactLinkPills emailPillRef={emailPillRef} />
      <ContactMessageCard
        isOpen={isContactFormOpen}
        onToggle={toggleContactForm}
        mobileForm={contactForm}
      />
    </div>
  );

  return (
    <section
      id="contact"
      className="relative z-40 bg-background pb-16 pt-2 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 pb-3 sm:pb-4 lg:px-8 md:text-center md:pb-6 lg:pb-8">
        <h2 data-contact-heading className={LANDING_SECTION_TITLE_CLASSNAME}>
          Contact
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-4 sm:pt-6 md:pt-2 lg:pt-2 lg:px-8">
        <div className="mx-auto max-w-[24rem] sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[55.5rem] xl:max-w-[58.75rem]">
          <motion.div
            layout
            className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full min-h-0 gap-7 md:gap-8 lg:gap-0"
            transition={panelTransition}
          >
            <motion.div
              layout
              className="flex w-full min-h-0 flex-col max-w-[24rem] sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[27rem] xl:max-w-[28.5rem] flex-shrink-0 relative z-10"
              transition={panelTransition}
            >
              {socialGrid}
            </motion.div>

            <AnimatePresence>
              {isContactFormOpen ? (
                <motion.div
                  id="contact-form-panel"
                  initial={{
                    opacity: 0,
                    width: 0,
                    marginLeft: 0,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                    marginLeft: "1.5rem",
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    marginLeft: 0,
                    filter: "blur(8px)",
                  }}
                  transition={panelTransition}
                  className="hidden lg:flex min-h-0 flex-col overflow-visible origin-left relative z-0"
                >
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    exit={{ x: 30 }}
                    transition={panelTransition}
                    className="w-[27rem] xl:w-[28.5rem] flex-shrink-0"
                  >
                    <div
                      className={cn(
                        contactDesktopCardClass,
                        "mx-0 w-full lg:max-w-none xl:max-w-none",
                        !state.error
                          ? "lg:h-[28.375rem]"
                          : "lg:min-h-[28.375rem]",
                      )}
                    >
                      {contactForm}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

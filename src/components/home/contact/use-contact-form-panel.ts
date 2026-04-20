"use client";

import { useActionState, useCallback, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_STATE: ContactState = {
  success: false,
  message: null,
  error: null,
};

export function useContactFormPanel() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [form, setForm] = useState<ContactFormValues>(INITIAL_VALUES);
  const [state, formAction, isSubmitting] = useActionState(
    submitContact,
    INITIAL_STATE,
  );
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const hadPendingSubmitRef = useRef(false);
  const closeTimeoutIdRef = useRef<number | null>(null);
  const successTimeoutIdRef = useRef<number | null>(null);

  const clearSuccessTimers = useCallback(() => {
    if (closeTimeoutIdRef.current !== null) {
      window.clearTimeout(closeTimeoutIdRef.current);
      closeTimeoutIdRef.current = null;
    }

    if (successTimeoutIdRef.current !== null) {
      window.clearTimeout(successTimeoutIdRef.current);
      successTimeoutIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isSubmitting) {
      hadPendingSubmitRef.current = true;
      return;
    }

    if (!hadPendingSubmitRef.current) {
      return;
    }

    hadPendingSubmitRef.current = false;

    if (!state.success) {
      setIsSuccessVisible(false);
      clearSuccessTimers();
      return;
    }

    setForm(INITIAL_VALUES);
    setIsSuccessVisible(true);
    clearSuccessTimers();

    closeTimeoutIdRef.current = window.setTimeout(() => {
      setIsContactFormOpen(false);
    }, 3000);

    successTimeoutIdRef.current = window.setTimeout(() => {
      setIsSuccessVisible(false);
    }, 3000);

    return undefined;
  }, [clearSuccessTimers, isSubmitting, state.success]);

  useEffect(() => {
    return () => {
      clearSuccessTimers();
    };
  }, [clearSuccessTimers]);

  return {
    form,
    setForm,
    state: {
      ...state,
      success: isSuccessVisible,
    },
    formAction,
    isContactFormOpen,
    setIsContactFormOpen,
    toggleContactForm: () => setIsContactFormOpen((previous) => !previous),
  };
}

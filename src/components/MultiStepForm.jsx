import { CalendarDays, Check, ChevronDown, Clock, Send } from "lucide-react";
import { useMemo, useReducer, useState } from "react";

const countryCodes = [
  { code: "+1", label: "Canada / US" },
  { code: "+91", label: "India" },
  { code: "+44", label: "UK" },
  { code: "+971", label: "UAE" },
  { code: "+63", label: "Philippines" },
];

const initialState = {
  qualification: {},
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    acknowledgement: false,
    marketingConsent: false,
  },
  schedule: {
    date: "",
    time: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "qualification":
      return {
        ...state,
        qualification: {
          ...state.qualification,
          [action.name]: action.value,
        },
      };
    case "contact":
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.name]: action.value,
        },
      };
    case "schedule":
      return {
        ...state,
        schedule: {
          ...state.schedule,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}

export default function MultiStepForm({ serviceType = "consultation", questions, title = "Check Your Eligibility" }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedCountry = useMemo(
    () => countryCodes.find((country) => country.code === state.contact.countryCode) || countryCodes[0],
    [state.contact.countryCode],
  );

  const phoneDigits = useMemo(
    () => state.contact.phone.replace(/\D/g, ""),
    [state.contact.phone],
  );

  const phoneValid = phoneDigits.length >= 7 && phoneDigits.length <= 15;

  const stepValid = useMemo(() => {
    if (step === 1) {
      return questions.every((question) => {
        if (question.type === "checkbox") return state.qualification[question.id] === true;
        return Boolean(state.qualification[question.id]);
      });
    }

    if (step === 2) {
      return (
        state.contact.firstName.trim().length > 1 &&
        state.contact.lastName.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.email) &&
        phoneValid
      );
    }

    if (step === 3) {
      return Boolean(state.schedule.date && state.schedule.time);
    }

    if (step === 4) {
      return state.contact.acknowledgement;
    }

    return true;
  }, [questions, state, step, phoneValid]);

  const progress = submitted ? 100 : Math.min(100, (step / 4) * 100);

  function nextStep() {
    if (!stepValid) return;
    setStep((value) => Math.min(value + 1, 4));
  }

  function submitForm(event) {
    event.preventDefault();
    if (!stepValid) return;
    setSubmitted(true);
    setStep(4);
  }

  if (submitted) {
    return (
      <div className="card overflow-hidden">
        <div className="h-2 bg-secondary" />
        <div className="p-8 text-center md:p-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check size={40} />
          </div>
          <h3 className="text-3xl font-extrabold text-primary">Consultation Request Received</h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Thank you, {state.contact.name}. Brightlight Immigration will review your {serviceType} details
            and contact you at {state.contact.email} within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-visible">
      <div className="h-2 rounded-t-lg bg-slate-100">
        <div className="h-full rounded-tl-lg bg-secondary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <form onSubmit={submitForm} className="p-6 md:p-8">
        <div className="mb-7 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Step {step} of 4</p>
          <h3 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-slate-500">
            {serviceType === "free consultation"
              ? "This is a free consultation request. Paid PR guidance or application fees are shared after your eligibility assessment."
              : `Free consultation for ${serviceType}. Paid support options and fees will be discussed after review.`}
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            {questions.map((question) => (
              <fieldset key={question.id}>
                {question.type === "checkbox" ? (
                  <label className="flex cursor-pointer gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-left">
                    <input
                      type="checkbox"
                      checked={Boolean(state.qualification[question.id])}
                      onChange={(event) =>
                        dispatch({ type: "qualification", name: question.id, value: event.target.checked })
                      }
                      className="mt-1 h-5 w-5 rounded border-slate-300 text-secondary focus:ring-secondary"
                    />
                    <span className="font-medium text-slate-700">{question.label}</span>
                  </label>
                ) : (
                  <>
                    <legend className="mb-3 font-bold text-primary">{question.label}</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {question.options.map((option) => {
                        const selected = state.qualification[question.id] === option;
                        return (
                          <label
                            key={option}
                            className={`cursor-pointer rounded-lg border px-4 py-3 text-center font-semibold transition ${
                              selected
                                ? "border-secondary bg-secondary/10 text-primary"
                                : "border-slate-200 bg-white text-slate-600 hover:border-secondary/60"
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={selected}
                              onChange={() =>
                                dispatch({ type: "qualification", name: question.id, value: option })
                              }
                              className="sr-only"
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  </>
                )}
              </fieldset>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-step">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="input-field"
                placeholder="First name"
                value={state.contact.firstName}
                onChange={(event) => dispatch({ type: "contact", name: "firstName", value: event.target.value })}
              />
              <input
                className="input-field"
                placeholder="Last name"
                value={state.contact.lastName}
                onChange={(event) => dispatch({ type: "contact", name: "lastName", value: event.target.value })}
              />
            </div>
            <input
              className="input-field"
              type="email"
              placeholder="Email address"
              value={state.contact.email}
              onChange={(event) => dispatch({ type: "contact", name: "email", value: event.target.value })}
            />
            <div className="grid gap-3 sm:grid-cols-[190px_1fr]">
              <div className="relative">
                <button
                  type="button"
                  className="input-field flex items-center justify-between text-left"
                  onClick={() => setMenuOpen((value) => !value)}
                >
                  <span>
                    <strong>{selectedCountry.code}</strong>
                    <span className="ml-2 text-sm text-slate-500">{selectedCountry.label}</span>
                  </span>
                  <ChevronDown size={18} />
                </button>
                {menuOpen && (
                  <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        className="block w-full px-4 py-3 text-left text-sm hover:bg-slate-50"
                        onClick={() => {
                          dispatch({ type: "contact", name: "countryCode", value: country.code });
                          setMenuOpen(false);
                        }}
                      >
                        <strong>{country.code}</strong> {country.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <input
                  className="input-field"
                  type="tel"
                  maxLength={15}
                  placeholder="Phone number"
                  value={state.contact.phone}
                  onChange={(event) => dispatch({ type: "contact", name: "phone", value: event.target.value })}
                />
                <p className="text-sm text-slate-500">
                  Enter 7 to 15 digits. We only use this number to confirm your booking.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 font-bold text-primary">
                <CalendarDays size={18} /> Preferred date
              </span>
              <input
                className="input-field"
                type="date"
                value={state.schedule.date}
                onChange={(event) => dispatch({ type: "schedule", name: "date", value: event.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 font-bold text-primary">
                <Clock size={18} /> Preferred time
              </span>
              <input
                className="input-field"
                type="time"
                value={state.schedule.time}
                onChange={(event) => dispatch({ type: "schedule", name: "time", value: event.target.value })}
              />
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5 animate-step">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h4 className="text-xl font-extrabold text-primary">Confirm your request</h4>
              <p className="mt-2 text-slate-600">
                We will use your answers, contact details, and selected consultation time to prepare for the first call.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-secondary">Contact</p>
                  <p className="mt-3 text-base font-semibold text-slate-800">
                    {state.contact.firstName} {state.contact.lastName}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{state.contact.email}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {selectedCountry.code} {state.contact.phone}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.18em] text-secondary">Appointment</p>
                  <p className="mt-3 text-base font-semibold text-slate-800">{state.schedule.date || "No date selected"}</p>
                  <p className="mt-1 text-sm text-slate-600">{state.schedule.time || "No time selected"}</p>
                  <p className="mt-4 text-sm text-slate-600">
                    {serviceType === "free consultation"
                      ? "This is a free consultation booking."
                      : `This request is for ${serviceType}.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="form-note">
              Free consultation is complimentary. Any paid PR guidance, application support, or filing fees will be discussed during your appointment and are not charged as part of this booking.
            </div>

            <label className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-secondary/70">
              <input
                type="checkbox"
                checked={state.contact.acknowledgement}
                onChange={(event) => dispatch({ type: "contact", name: "acknowledgement", value: event.target.checked })}
                className="mt-1 h-5 w-5 rounded border-slate-300 text-secondary focus:ring-secondary"
              />
              <div>
                <p className="font-semibold text-slate-900">I understand this free consultation is an eligibility review and not a guarantee of approval.</p>
                <p className="mt-1 text-sm text-slate-600">
                  Brightlight Immigration does not provide job offers, LMIA, or employment support as part of this booking.
                </p>
              </div>
            </label>

            <label className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-secondary/70">
              <input
                type="checkbox"
                checked={state.contact.marketingConsent}
                onChange={(event) => dispatch({ type: "contact", name: "marketingConsent", value: event.target.checked })}
                className="mt-1 h-5 w-5 rounded border-slate-300 text-secondary focus:ring-secondary"
              />
              <div>
                <p className="font-semibold text-slate-900">I consent to receive SMS notifications, alerts & occasional marketing communication.</p>
                <p className="mt-1 text-sm text-slate-600">You can reply STOP to unsubscribe at any time.</p>
              </div>
            </label>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-3">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setStep((value) => Math.max(1, value - 1))}
            disabled={step === 1}
          >
            Back
          </button>
          {step < 4 ? (
            <button type="button" className="btn-primary" onClick={nextStep} disabled={!stepValid}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn-primary" disabled={!stepValid}>
              Send Request
              <Send size={18} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

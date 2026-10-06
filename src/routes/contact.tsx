import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { z } from "zod";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Request a Quote | Archvello Design" },
      {
        name: "description",
        content:
          "Share your drawing set, scope or BEP and receive a fee proposal and delivery programme within one business day.",
      },
      { property: "og:title", content: "Contact | Archvello Design" },
      {
        property: "og:description",
        content: "Request a fee proposal and delivery programme from our studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  projectType: z.string().trim().min(1, "Please select a project type"),
  service: z.string().trim().min(1, "Please select a service"),
  projectSize: z.string().trim().min(1, "Please select an option"),
  timeline: z.string().trim().min(1, "Please select a timeline"),
  requirements: z
    .string()
    .trim()
    .min(10, "Please add a few details about the project")
    .max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const emptyRaw: Record<keyof EnquiryForm, string | boolean> = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  service: "General Enquiry",
  projectSize: "",
  timeline: "",
  requirements: "",
  consent: false,
};

function ContactPage() {
  const [values, setValues] = useState(emptyRaw);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const set = (name: keyof EnquiryForm, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[name];
        return next;
      });
    }
  };

  const validateField = (name: keyof EnquiryForm) => {
    const result = enquirySchema.safeParse(values);
    if (result.success) return;
    const issue = result.error.issues.find((i) => String(i.path[0]) === name);
    if (issue) setErrors((e) => ({ ...e, [name]: issue.message }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSent(false);
    setDeliveryError(
      "Email delivery is being activated for info@archvellodesign.com. Please email us directly while setup is completed.",
    );
  };

  const err = (name: string) =>
    errors[name] ? <span className="enquiry-error">{errors[name]}</span> : null;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Start a project"
        lead="Tell us about the scope and we'll come back with a fee proposal and programme within one business day."
      />

      <section className="enquiry-section">
        <div className="container">
          <form noValidate onSubmit={onSubmit} className="enquiry-form reveal">
            {/* 01 — Contact details */}
            <div className="enquiry-block">
              <p className="enquiry-step">
                <span>01</span> Contact details
              </p>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="fullName">
                    Full name <em>*</em>
                  </label>
                  <input
                    className="enquiry-input"
                    id="fullName"
                    placeholder="Your name"
                    maxLength={120}
                    value={values.fullName as string}
                    onChange={(e) => set("fullName", e.target.value)}
                    onBlur={() => validateField("fullName")}
                  />
                  {err("fullName")}
                </div>
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="company">
                    Company <em>*</em>
                  </label>
                  <input
                    className="enquiry-input"
                    id="company"
                    placeholder="Company / Studio name"
                    maxLength={120}
                    value={values.company as string}
                    onChange={(e) => set("company", e.target.value)}
                    onBlur={() => validateField("company")}
                  />
                  {err("company")}
                </div>
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="email">
                    Business email <em>*</em>
                  </label>
                  <input
                    type="email"
                    className="enquiry-input"
                    id="email"
                    placeholder="you@company.com"
                    maxLength={255}
                    value={values.email as string}
                    onChange={(e) => set("email", e.target.value)}
                    onBlur={() => validateField("email")}
                  />
                  {err("email")}
                </div>
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    className="enquiry-input"
                    id="phone"
                    placeholder="+00 000 000 0000"
                    maxLength={30}
                    value={values.phone as string}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {err("phone")}
                </div>
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="enquiry-input"
                    id="country"
                    placeholder="Country"
                    maxLength={80}
                    value={values.country as string}
                    onChange={(e) => set("country", e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="enquiry-label" htmlFor="projectType">
                    Project type
                  </label>
                  <select
                    className="enquiry-input enquiry-select"
                    id="projectType"
                    value={values.projectType as string}
                    onChange={(e) => set("projectType", e.target.value)}
                    onBlur={() => validateField("projectType")}
                  >
                    <option value="">Select project type</option>
                    <option>Hospitality</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Retail</option>
                    <option>Workplace</option>
                    <option>Other</option>
                  </select>
                  {err("projectType")}
                </div>
              </div>
            </div>

            {/* 02 — Project details */}
            <div className="enquiry-block">
              <p className="enquiry-step">
                <span>02</span> Project details
              </p>
              <div className="row g-4">
                <div className="col-md-4">
                  <label className="enquiry-label" htmlFor="service">
                    Service required
                  </label>
                  <select
                    className="enquiry-input enquiry-select"
                    id="service"
                    value={values.service as string}
                    onChange={(e) => set("service", e.target.value)}
                  >
                    <option>General Enquiry</option>
                    <option>Architecture Documentation</option>
                    <option>Interior Documentation</option>
                    <option>BIM Consultancy</option>
                    <option>MEPF Coordination</option>
                    <option>3D Visualization</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="enquiry-label" htmlFor="projectSize">
                    Approx. project size
                  </label>
                  <select
                    className="enquiry-input enquiry-select"
                    id="projectSize"
                    value={values.projectSize as string}
                    onChange={(e) => set("projectSize", e.target.value)}
                    onBlur={() => validateField("projectSize")}
                  >
                    <option value="">Select an option</option>
                    <option>Under 5,000 sq ft</option>
                    <option>5,000 – 25,000 sq ft</option>
                    <option>25,000 – 100,000 sq ft</option>
                    <option>100,000+ sq ft</option>
                  </select>
                  {err("projectSize")}
                </div>
                <div className="col-md-4">
                  <label className="enquiry-label" htmlFor="timeline">
                    Required timeline
                  </label>
                  <select
                    className="enquiry-input enquiry-select"
                    id="timeline"
                    value={values.timeline as string}
                    onChange={(e) => set("timeline", e.target.value)}
                    onBlur={() => validateField("timeline")}
                  >
                    <option value="">Select timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>Just exploring</option>
                  </select>
                  {err("timeline")}
                </div>
                <div className="col-12">
                  <label className="enquiry-label" htmlFor="requirements">
                    Project requirements <em>*</em>
                  </label>
                  <textarea
                    className="enquiry-input"
                    id="requirements"
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us about your project, drawings required, current status, deliverables and deadline."
                    value={values.requirements as string}
                    onChange={(e) => set("requirements", e.target.value)}
                    onBlur={() => validateField("requirements")}
                  />
                  {err("requirements")}
                </div>

                {/* Attach files */}
                <div className="col-12">
                  <div className="enquiry-attach">
                    <div>
                      <p className="enquiry-attach__title">Attach project files</p>
                      <p className="enquiry-attach__hint">
                        {files.length > 0 ? files.join(", ") : "PDF, DWG, DXF, ZIP, JPG or PNG"}
                      </p>
                    </div>
                    <div className="enquiry-attach__actions">
                      <button
                        type="button"
                        className="enquiry-attach__btn"
                        onClick={() => fileInput.current?.click()}
                      >
                        Choose files
                      </button>
                      <span className="enquiry-attach__optional">Optional</span>
                    </div>
                    <input
                      ref={fileInput}
                      type="file"
                      multiple
                      accept=".pdf,.dwg,.dxf,.zip,.jpg,.jpeg,.png"
                      hidden
                      onChange={(e) =>
                        setFiles(Array.from(e.target.files ?? []).map((f) => f.name))
                      }
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="enquiry-consent">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={values.consent as boolean}
                      onChange={(e) => set("consent", e.target.checked)}
                    />
                    <label htmlFor="consent">
                      I agree that Archvello Design may contact me regarding this project enquiry.
                    </label>
                  </div>
                  {err("consent")}
                </div>
              </div>
            </div>

            {/* Footer row */}
            <div className="enquiry-footer">
              <div>
                <p className="enquiry-footer__label">Business enquiries</p>
                <a className="enquiry-footer__mail" href="mailto:info@archvellodesign.com">
                  info@archvellodesign.com
                </a>
              </div>
              <div className="enquiry-footer__right">
                {sent ? (
                  <p className="enquiry-success">
                    Thank you — your enquiry has been received. Our team will respond within one
                    business day.
                  </p>
                ) : null}
                {deliveryError ? <p className="enquiry-delivery-error">{deliveryError}</p> : null}
                <button className="enquiry-submit" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Submit project enquiry"}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

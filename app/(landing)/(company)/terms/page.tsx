import Link from "next/link"

export default function TermsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 lg:pb-12 max-w-4xl mx-auto">
      <div className="gap-4 py-16 lg:py-24">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-cal text-center">
          Terms of Service
        </h1>
      </div>
      <div className="prose ">
        <p>
          <strong>Last Updated:</strong> April 18, 2024
        </p>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          Mahajon (&quot;Service&quot;) provided by Mahajon Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          Please read these Terms carefully before accessing or using the
          Service.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of these Terms, then you may not
          access or use the Service.
        </p>

        <h2>1. Definitions</h2>
        <ul>
          <li>
            <strong>Account:</strong> means a unique account created by you to
            access the Service.
          </li>
          <li>
            <strong>Content:</strong> means any text, data, information,
            graphics, images, or other materials uploaded, submitted, or stored
            by you through the Service.
          </li>
          <li>
            <strong>Subscription:</strong> (To be added in the future) - means
            your paid or free access to a specific level of service within the
            Service. (Currently not applicable)
          </li>
          <li>
            <strong>User:</strong> means any individual or entity who accesses
            or uses the Service.
          </li>
        </ul>

        <h2>2. Your Account</h2>
        <ol>
          <li>
            <p>
              You must be at least 18 years old to access or use the Service.
            </p>
          </li>
          <li>
            <p>
              You are responsible for maintaining the confidentiality of your
              Account and password, including but not limited to restricting
              access to your computer and/or Account. You agree to accept
              responsibility for all activities or actions that occur under your
              Account or password.
            </p>
          </li>
          <li>
            <p>
              You may not use the Service for any illegal or unauthorized
              purpose nor may you, in the use of the Service, violate any laws
              in your jurisdiction (including but not limited to copyright
              laws).
            </p>
          </li>
        </ol>

        <h2>3. Use of the Service</h2>
        <ol>
          <li>
            <p>
              We grant you a non-exclusive, non-transferable license to use the
              Service for your personal or business use. (Since you currently
              offer everything for free, remove reference to Subscription).
            </p>
          </li>
          <li>
            <p>You will not:</p>
            <ol>
              <li>
                Copy, modify, distribute, sell, lease, or reverse engineer the
                Service.
              </li>
              <li>
                Use the Service to store or transmit any illegal or unauthorized
                content.
              </li>
              <li>
                Interfere with or disrupt the Service or servers or networks
                connected to the Service.
              </li>
              <li>Use the Service to impersonate any person or entity.</li>
              <li>Violate any applicable laws or regulations.</li>
            </ol>
          </li>
        </ol>

        <h2>4. Content</h2>
        <ol>
          <li>
            <p>You retain all ownership rights to your Content.</p>
          </li>
          <li>
            <p>
              By submitting Content to the Service, you grant us a
              non-exclusive, royalty-free, worldwide license to use, reproduce,
              modify, publish, distribute, and translate your Content for the
              purpose of providing the Service.
            </p>
          </li>
          <li>
            <p>
              You are solely responsible for any Content you submit to the
              Service.
            </p>
          </li>
        </ol>

        <h2>5. Third-Party Links</h2>
        <p>
          The Service may contain links to third-party websites or services that
          are not owned or controlled by us. We have no control over, and assume
          no responsibility for, the content, privacy policies, or practices of
          any third-party websites or services.
        </p>

        <h2>6. Beta Disclaimer</h2>
        <p>
          Please note that the Service is currently in beta testing. This means
          that the Service may be unreliable and contain errors. We may modify
          or discontinue the Service at any time without notice. Your use of the
          Service is at your own risk.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service at any time,
          without notice, for any reason, including, but not limited to, if you
          violate these Terms.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF
          ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
          UNINTERRUPTED, SECURE, OR ERROR-FREE.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES, DIRECT, INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of <span className="text-green-800 font-bold">Bangladesh</span>{" "}
          without regard to its conflict of law provisions.
        </p>

        <h2>11. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and us
          regarding the use of the Service and supersede all prior or
          contemporaneous communications and proposals, whether oral or written.
        </p>

        <h2>12. Changes to the Terms</h2>
        <p>
          We may update these Terms at any time by posting the revised terms on
          the Service. You are responsible for checking these Terms periodically
          for any changes. Your continued use of the Service following the
          posting of revised Terms means that you accept and agree to the
          changes.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          Please visit{" "}
          <Link className="no-underline hover:underline" href="/privacy">
            this url
          </Link>{" "}
          to understand how we collect, use, and disclose your personal
          information.
        </p>
      </div>
    </section>
  )
}

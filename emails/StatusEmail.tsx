// emails/StatusEmail.tsx
import { Html, Head, Body, Container, Text, Section, Heading } from "@react-email/components";
import * as React from "react";

interface StatusEmailProps {
  name: string;
  status: "ACCEPTED" | "REJECTED";
}

export default function StatusEmail({ name, status }: StatusEmailProps) {
  const isApproved = status === "ACCEPTED";

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>FLASH FC</Heading>
          </Section>

          <Section style={content}>
            <Text style={heading}>Hello {name},</Text>
            
            {isApproved ? (
              <>
                <Text style={paragraph}>
                  Congratulations! Your registration request for Flash FC has been <strong>approved</strong>.
                </Text>
                <Text style={paragraph}>
                  We are thrilled to welcome you to the club. Please look out for future communications regarding training schedules and upcoming fixtures.
                </Text>
                <a href="https://fcflash.com" style={button}>Explore our website</a>
              </>
            ) : (
              <>
                <Text style={paragraph}>
                  Thank you for your interest in joining Flash FC. After careful review, we regret to inform you that we are unable to approve your registration at this time.
                </Text>
                <Text style={paragraph}>
                  We wish you the best in your future athletic endeavors.
                </Text>
              </>
            )}

            <Text style={footer}>
              Best regards,<br />
              The Flash FC Admin Team,
              +254 758 844 760
              info@fcflash.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Minimalist, premium inline styles
const main = { backgroundColor: "#f6f9fc", fontFamily: "Montserrat, sans-serif" };
const container = { backgroundColor: "#ffffff", margin: "0 auto", padding: "20px 0 48px", marginBottom: "64px" };
const header = { backgroundColor: "#171717", padding: "24px", textAlign: "center" as const };
const headerTitle = { color: "#ffffff", fontSize: "24px", fontWeight: "900", letterSpacing: "2px", margin: "0" };
const content = { padding: "0 48px" };
const heading = { fontSize: "20px", color: "#171717", marginTop: "24px" };
const paragraph = { fontSize: "14px", lineHeight: "24px", color: "#525252" };
const button = { backgroundColor: "#d97706", borderRadius: "8px", color: "#fff", display: "inline-block", padding: "12px 24px", textDecoration: "none", fontWeight: "bold", marginTop: "16px" };
const footer = { fontSize: "12px", color: "#a3a3a3", marginTop: "48px", borderTop: "1px solid #e5e5e5", paddingTop: "24px" };
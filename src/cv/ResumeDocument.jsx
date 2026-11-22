import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { certifications, education, experience, profile, skills } from "../data.js";

const lime = "#c8f531";
const ink = "#f4f7f0";
const muted = "#c5cec2";
const dim = "#8f998c";
const card = "#10140f";
const line = "#2a3820";

function fontFile(filename) {
  const url = new URL(`../assets/fonts/${filename}`, import.meta.url);
  if (typeof window === "undefined") {
    let path = decodeURIComponent(url.pathname);
    if (/^\/[A-Za-z]:/.test(path)) path = path.slice(1);
    return path;
  }
  return url.href;
}

Font.register({
  family: "Outfit",
  fonts: [
    { src: fontFile("outfit-latin-400-normal.woff"), fontWeight: 400 },
    { src: fontFile("outfit-latin-500-normal.woff"), fontWeight: 500 },
    { src: fontFile("outfit-latin-600-normal.woff"), fontWeight: 600 },
    { src: fontFile("outfit-latin-700-normal.woff"), fontWeight: 700 },
  ],
});

Font.register({
  family: "Syne",
  fonts: [
    { src: fontFile("syne-latin-700-normal.woff"), fontWeight: 700 },
    { src: fontFile("syne-latin-800-normal.woff"), fontWeight: 800 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

function host(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function SectionTitle({ index, children }) {
  return (
    <Text style={styles.kicker}>
      <Text style={styles.kickerIndex}>{index}</Text>
      <Text>{`   ${children}`}</Text>
    </Text>
  );
}

function ResumeDocument({ siteUrl }) {
  const site = siteUrl || profile.website;
  const siteHost = site ? host(site) : "";

  return (
    <Document
      title="Jonathan Christian — Currículo"
      author="Jonathan Christian"
      subject="Tech Lead e Full Stack Developer"
      language="pt-BR"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.topBar} />
        <View style={styles.inner}>
          <View style={styles.header}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>JC</Text>
            </View>
            <View style={styles.headerCopy}>
              <Text style={styles.name}>Jonathan</Text>
              <Text style={styles.nameLime}>Christian</Text>
              <Text style={styles.role}>
                Tech Lead <Text style={styles.slash}>/</Text> Full Stack Developer
              </Text>
            </View>
          </View>

          <View style={styles.contacts}>
            <Link src={`mailto:${profile.email}`} style={styles.contactLink}>
              {profile.email}
            </Link>
            <Text style={styles.dot}>·</Text>
            <Link src={profile.linkedin} style={styles.contactLink}>
              LinkedIn
            </Link>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.contact}>{profile.location}</Text>
            {site ? (
              <>
                <Text style={styles.dot}>·</Text>
                <Link src={site} style={styles.contactLime}>
                  {siteHost}
                </Link>
              </>
            ) : null}
          </View>

          <View style={styles.profileCard}>
            <SectionTitle index="01">Perfil</SectionTitle>
            <Text style={styles.body}>
              CTO na Índice Digital e diretor de tecnologia na Heaven Sender. Há mais de cinco anos
              entrego software que a operação usa, em PHP, Laravel, Node.js, React e React Native — da
              API e da arquitetura até a prioridade do time. Bacharel em Ciência da Computação. 22 anos.
            </Text>
          </View>

          <SectionTitle index="02">Trajetória</SectionTitle>
          {experience.map((job) => (
            <View key={job.company} style={styles.job} wrap={false}>
              <View style={styles.jobWhen}>
                <Text style={styles.jobPeriod}>{job.period}</Text>
                <Text style={styles.jobPlace}>{job.place}</Text>
              </View>
              <View style={styles.jobBody}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
                <Text style={styles.jobText}>{job.cv || job.text}</Text>
                {job.roles?.map((role) => (
                  <View key={role.title} style={styles.roleRow}>
                    <Text style={styles.roleTitle}>{role.title}</Text>
                    <Text style={styles.rolePeriod}>{role.period}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <SectionTitle index="03">Competências</SectionTitle>
          <View style={styles.skillGrid}>
            {skills.map((group) => (
              <View key={group.title} style={styles.skillWrap} wrap={false}>
                <View style={styles.skillCard}>
                  <Text style={styles.skillTitle}>
                    <Text style={styles.skillIndex}>{`${group.index}  `}</Text>
                    {group.title}
                  </Text>
                  {group.level ? <Text style={styles.skillLevel}>{group.level}</Text> : null}
                  <View style={styles.skillItems}>
                    {group.items.map((item, index) => (
                      <Text key={item} style={styles.skillItem}>
                        {index > 0 ? "·  " : ""}
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.spacer} />
          <View style={styles.footer}>
            {site ? (
              <Link src={site} style={styles.footerLink}>
                Portfólio  ·  {siteHost}
              </Link>
            ) : (
              <Text style={styles.footerMeta}>{profile.availability}</Text>
            )}
            <Text style={styles.footerMeta}>01 / 02</Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.topBar} />
        <View style={styles.inner}>
          <View style={styles.pageHead}>
            <View>
              <Text style={styles.pageName}>Jonathan Christian</Text>
              <Text style={styles.pageRole}>Tech Lead  /  Full Stack Developer</Text>
            </View>
            {site ? (
              <Link src={site} style={styles.sitePill}>
                {siteHost}
              </Link>
            ) : null}
          </View>

          <SectionTitle index="04">Formação</SectionTitle>
          <View style={styles.eduRow}>
            {education.map((item) => (
              <View key={item.school} style={styles.eduCard} wrap={false}>
                <Text style={styles.eduSchool}>{item.school}</Text>
                <Text style={styles.eduCourse}>{item.course}</Text>
                <Text style={styles.eduPeriod}>{item.period}</Text>
              </View>
            ))}
          </View>

          <SectionTitle index="05">Certificações</SectionTitle>
          <View style={styles.certGrid}>
            {certifications.map((item) => (
              <View key={item.url} style={styles.certWrap} wrap={false}>
                <Link src={item.url} style={styles.certLink}>
                  <Text style={styles.certTitle}>{item.title}</Text>
                  <Text style={styles.certMeta}>
                    {item.issuer} · {item.date}
                  </Text>
                </Link>
              </View>
            ))}
          </View>

          <View style={styles.spacer} />
          <View style={styles.footer}>
            {site ? (
              <Link src={site} style={styles.footerLink}>
                Formação e certificados  ·  {site}
              </Link>
            ) : (
              <Text style={styles.footerMeta}>{profile.availability}</Text>
            )}
            <Text style={styles.footerMeta}>02 / 02</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#07080b",
    color: ink,
    fontFamily: "Outfit",
    fontSize: 9,
    lineHeight: 1.4,
  },
  topBar: {
    height: 7,
    backgroundColor: lime,
  },
  inner: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 32,
    paddingBottom: 18,
  },
  spacer: { flexGrow: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  badge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: card,
    borderWidth: 1,
    borderColor: line,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 16,
    color: lime,
  },
  headerCopy: { flex: 1 },
  name: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 28,
    lineHeight: 0.95,
    letterSpacing: -0.8,
    color: ink,
  },
  nameLime: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 28,
    lineHeight: 0.95,
    letterSpacing: -0.8,
    color: lime,
  },
  role: {
    marginTop: 6,
    fontFamily: "Syne",
    fontWeight: 700,
    fontSize: 11,
    color: ink,
  },
  slash: { color: lime },
  contacts: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contact: { color: muted, fontSize: 9 },
  contactLink: { color: muted, fontSize: 9, textDecoration: "none" },
  contactLime: { color: lime, fontSize: 9, fontWeight: 700, textDecoration: "none" },
  dot: { color: dim, marginHorizontal: 6, fontSize: 9 },
  profileCard: {
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: card,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: line,
    borderLeftWidth: 3,
    borderLeftColor: lime,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  kicker: {
    fontFamily: "Syne",
    fontWeight: 700,
    fontSize: 11,
    color: ink,
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  kickerIndex: { color: lime },
  body: { color: muted, fontSize: 9.5, lineHeight: 1.45 },
  job: {
    flexDirection: "row",
    marginBottom: 4,
  },
  jobWhen: { width: 108, paddingRight: 8, paddingTop: 1 },
  jobPeriod: { color: ink, fontSize: 8, fontWeight: 600 },
  jobPlace: { color: dim, fontSize: 7.5, marginTop: 2 },
  jobBody: {
    flex: 1,
    borderLeftWidth: 2,
    borderLeftColor: lime,
    paddingLeft: 10,
  },
  jobTitle: { fontFamily: "Syne", fontWeight: 700, fontSize: 11, color: ink },
  jobCompany: { color: lime, fontSize: 8.5, fontWeight: 600, marginTop: 1 },
  jobText: { color: muted, fontSize: 8.5, marginTop: 2, lineHeight: 1.35 },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  roleTitle: { color: ink, fontSize: 8, fontWeight: 600 },
  rolePeriod: { color: dim, fontSize: 7.5 },
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  skillWrap: { width: "25%", paddingHorizontal: 4, marginBottom: 4 },
  skillCard: {
    backgroundColor: card,
    borderWidth: 1,
    borderColor: line,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    minHeight: 58,
  },
  skillTitle: { fontFamily: "Syne", fontWeight: 700, fontSize: 8.5, color: ink },
  skillIndex: { color: lime, fontFamily: "Syne", fontWeight: 700 },
  skillLevel: { color: lime, fontSize: 7, marginTop: 1 },
  skillItems: { flexDirection: "row", flexWrap: "wrap", marginTop: 3 },
  skillItem: { color: muted, fontSize: 7.5, lineHeight: 1.35, marginRight: 3 },
  pageHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: line,
  },
  pageName: { fontFamily: "Syne", fontWeight: 800, fontSize: 14, color: ink },
  pageRole: { color: dim, fontSize: 8, marginTop: 2 },
  sitePill: {
    backgroundColor: lime,
    color: "#10160a",
    fontWeight: 700,
    fontSize: 8.5,
    textDecoration: "none",
    borderRadius: 99,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  eduRow: { flexDirection: "row", marginBottom: 10, marginHorizontal: -4 },
  eduCard: {
    width: "50%",
    marginHorizontal: 4,
    backgroundColor: card,
    borderWidth: 1,
    borderColor: line,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  eduSchool: { color: lime, fontSize: 8, fontWeight: 700, letterSpacing: 0.4 },
  eduCourse: { fontFamily: "Syne", fontWeight: 700, fontSize: 10, color: ink, marginTop: 2 },
  eduPeriod: { color: dim, fontSize: 8, marginTop: 2 },
  certGrid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -4 },
  certWrap: { width: "50%", paddingHorizontal: 4, marginBottom: 5 },
  certLink: { textDecoration: "none" },
  certTitle: { color: ink, fontSize: 8, fontWeight: 600 },
  certMeta: { color: dim, fontSize: 7.5, marginTop: 1 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: line,
  },
  footerLink: { color: lime, fontSize: 8, fontWeight: 600, textDecoration: "none" },
  footerMeta: { color: dim, fontSize: 8 },
});

export { ResumeDocument };

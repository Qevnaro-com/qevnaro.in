import React, { lazy, Suspense } from 'react';
import { Cloud } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';
import { Eyebrow, SplitHeading } from '../../components/ui/Reveal';

const ScalabilityBricksMassif = lazy(() => import('../../components/ui/ScalabilityBricksMassif'));

const DATA: ServicePageData = {
  badge: 'Category G · Cloud & Infrastructure',
  title: 'Cloud Infrastructure & DevOps Engineered for 99.9% Uptime',
  subtitle: 'Production AWS and Azure architecture, automated Docker container pipelines, zero-downtime CI/CD deployments, and proactive server monitoring.',
  overview: [
    'A brilliant web or mobile application is only as dependable as the underlying cloud infrastructure hosting it. Unmanaged servers, lack of automated backups, unoptimized database queries, and manual deployment processes create downtime risks that destroy client confidence.',
    'At Qevnaro, our DevOps engineers build modern, resilient cloud environments. We architect containerized deployments on Amazon Web Services (AWS) and Microsoft Azure, automate deployment pipelines via GitHub Actions, configure SSL and DDoS protection through Cloudflare, and implement automated daily backups with real-time alerting.'
  ],
  whyNeeded: {
    heading: 'Why Disciplined Cloud Architecture Protects Your Business',
    points: [
      { title: 'Zero-Downtime Deployments', desc: 'Deploy new software updates and bug fixes seamlessly without taking your live application offline.' },
      { title: 'Elastic Auto-Scaling', desc: 'Handle sudden traffic spikes from marketing campaigns or viral events without server crashes.' },
      { title: 'Disaster Recovery & Daily Backups', desc: 'Automated encrypted snapshot backups ensuring your databases and file assets can be restored in minutes.' },
      { title: 'Cost Optimization', desc: 'Right-sizing cloud instances and implementing caching to eliminate bloated monthly AWS or Azure bills.' }
    ]
  },
  problemsSolved: [
    {
      title: 'Unexpected Server Crashes During Traffic Spikes',
      problem: 'Single-server setups crashing when traffic surges, leading to lost customer transactions.',
      solution: 'We configure load balancers, multi-AZ database read replicas, and containerized auto-scaling groups.'
    },
    {
      title: 'Risky, Manual Code Deployments',
      problem: 'Developers manually dragging files over FTP or SSH, causing human errors and broken live pages.',
      solution: 'Automated GitHub Actions CI/CD pipelines that test, build, and deploy code automatically on git push.'
    },
    {
      title: 'Vulnerabilities & Missing SSL Security',
      problem: 'Unpatched servers vulnerable to malicious bots, brute-force attacks, and expired SSL certificate warnings.',
      solution: 'Automated SSL renewals, Cloudflare Web Application Firewall (WAF) rules, and server hardening.'
    }
  ],
  deliverables: [
    'Complete AWS or Microsoft Azure cloud architecture setup and configuration',
    'Docker containerization of frontend, backend, and background worker services',
    'Automated GitHub Actions or GitLab CI/CD deployment pipeline configuration',
    'Cloudflare DNS, SSL encryption, and DDoS mitigation rules setup',
    'Automated daily database snapshot backup and disaster recovery runbook',
    'Real-time uptime monitoring and instant Slack / email alert integration',
    'Infrastructure-as-Code (Terraform / Docker Compose) documentation'
  ],
  subServices: [
    { title: 'AWS Cloud Architecture', desc: 'Configuring EC2, ECS, S3, RDS PostgreSQL, and CloudFront CDN.' },
    { title: 'Microsoft Azure Solutions', desc: 'Azure App Services, Blob Storage, and Azure SQL enterprise deployments.' },
    { title: 'Docker Containerization', desc: 'Standardizing development and production runtime environments.' },
    { title: 'Automated CI/CD Pipelines', desc: 'Fast, automated testing and zero-downtime deployment pipelines.' },
    { title: 'Uptime & Telemetry Monitoring', desc: '24/7 endpoint health checks with automated alerting to engineering teams.' },
    { title: 'Cloud Cost Optimization', desc: 'Auditing resource utilization to reduce monthly cloud provider invoices.' }
  ],
  methodology: [
    { step: '01', title: 'Architecture Audit & Sizing', desc: 'Auditing current compute, memory, database IOPS, and estimating traffic requirements.' },
    { step: '02', title: 'Containerization & Pipeline Build', desc: 'Writing Dockerfiles and configuring automated GitHub Actions deployment runners.' },
    { step: '03', title: 'Staging & Migration Run', desc: 'Migrating databases and verifying zero data loss on isolated staging environments.' },
    { step: '04', title: 'DNS Cutover & Live Telemetry', desc: 'Executing smooth DNS cutover with zero downtime and activating 24/7 health monitoring.' }
  ],
  toolsAndTech: [
    { category: 'Cloud Providers', items: ['Amazon Web Services (AWS AP-South-1)', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare'] },
    { category: 'DevOps & Containers', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Terraform', 'Nginx'] },
    { category: 'Monitoring & Safety', items: ['Uptime Kuma', 'Datadog', 'Sentry Error Tracking', 'AWS CloudWatch'] }
  ],
  whoNeedsThis: [
    'Fast-growing web and mobile platforms experiencing server slowness or crashes.',
    'Companies preparing for major product launches or high-budget marketing campaigns.',
    'Businesses migrating away from expensive shared hosting to scalable cloud architecture.',
    'Startups needing a bulletproof automated deployment workflow for their developer team.'
  ],
  businessOutcomes: [
    { metric: '99.9%', label: 'Monitored Uptime', desc: 'Proactive multi-location endpoint monitoring with instant team alerts.' },
    { metric: '0s', label: 'Downtime Deploys', desc: 'Seamless container rolling updates with zero interruption to active users.' },
    { metric: 'Daily', label: 'Automated Backups', desc: 'Encrypted offsite database snapshots with tested recovery procedures.' }
  ],
  relatedCaseStudies: [
    { title: 'Qevnaro Core AWS AP-South-1 Topology', desc: 'Clustered NLB, Redis 7.2 streams, and PostgreSQL sharded ACID store.', href: '/work', tag: 'Cloud Infrastructure' }
  ],
  relatedServices: [
    { title: 'Web Development', desc: 'Building custom web platforms that leverage cloud container architecture.', href: '/services/web-development' },
    { title: 'AI Business Automation', desc: 'Deploying custom Python AI microservices on dedicated cloud servers.', href: '/services/ai-automation' },
    { title: 'Mobile App Development', desc: 'Resilient cloud backends powering iOS and Android applications.', href: '/services/mobile-app-development' }
  ],
  faqs: [
    { q: 'Who owns the cloud accounts and infrastructure?', a: 'You maintain 100% direct ownership of your AWS, Azure, or Cloudflare accounts. All servers, databases, and billing profiles are configured under your company credentials. Qevnaro simply operates with delegated administrative access, ensuring you are never locked in.' },
    { q: 'Can you migrate our live website or application without causing downtime?', a: 'Yes. We follow a strict blue/green or staging migration procedure. We containerize your application, replicate your database in the background, verify all functionality on a staging URL, and switch DNS records seamlessly with zero disruption to your active users.' },
    { q: 'What happens if a server crashes at 2 AM?', a: 'We configure automated self-healing mechanisms: container restarts, load balancer failover, and automated alerts dispatched instantly via Slack, SMS, or email to on-call engineering leads.' }
  ],
  icon: Cloud
};

export const CloudDevops: React.FC = () => {
  return (
    <ServiceDetailLayout data={DATA}>
      <div className="mb-10 max-w-3xl">
        <Eyebrow>Elastic Infrastructure</Eyebrow>
        <SplitHeading as="h2" text="Simulate Scaling Under Live Traffic" className="mt-4 font-display text-3xl font-bold sm:text-4xl" />
        <p className="mt-4 text-sm leading-relaxed text-fg-soft">
          Test auto-scaling resilience in this interactive 3D simulation. Trigger simulated traffic spikes to see container distribution and cluster balancing.
        </p>
      </div>
      <div className="relative">
        <Suspense fallback={<div className="grid h-64 place-items-center font-mono text-xs text-fg-muted">Loading cloud simulation...</div>}>
          <ScalabilityBricksMassif />
        </Suspense>
      </div>
    </ServiceDetailLayout>
  );
};

export default CloudDevops;

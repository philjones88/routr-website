// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: true,
      collapsed: true,
      items: [
        'overview/introduction',
        'overview/architecture',
        'overview/concepts',
        'overview/deploy-with-docker',
      ],
    },
    {
      type: 'category',
      label: 'Connect Mode',
      collapsible: true,
      collapsed: true,
      items: [
        'connect/introduction',
        'connect/concepts',
        {
          type: 'category',
          label: 'Quick Start',
          collapsible: true,
          collapsed: true,
          items: [
            'connect/quick-start/docker',
            'connect/quick-start/kubernetes',
          ]
        },
        {
          type: 'category',
          label: 'Command-Line Tool',
          collapsible: true,
          collapsed: true,
          items: [
            'connect/command-line/overview',
            'connect/command-line/ctl',
          ]
        },
        {
          type: 'category',
          label: 'Node.js SDK',
          collapsible: true,
          collapsed: true,
          items: [
            'connect/nodesdk/overview',
            'connect/nodesdk/sdk',
          ]
        },
        'connect/home-or-office-setup',
        'connect/webrtc-support',
        'connect/securing-the-server',
        'connect/sending-call-events-to-nats'
      ],
    },
    'community',
    'faqs',
    // 'changelog'
  ],
};

module.exports = sidebars;

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
        // 'connect/concepts',
        // 'connect/components',
        // {
        //   type: 'category',
        //   label: 'Quick Start',
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     'connect/quick-start/docker',
        //     'connect/quick-start/kubernetes',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Guides',
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     'connect/guides/home-or-office-setup',
        //     'connect/guides/routr-as-asterisk-frontend',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Command-line Tool',
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     'connect/ctl/overview',
        //     'connect/ctl/commands',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Node.js SDK',
        //   collapsible: true,
        //   collapsed: true,
        //   items: [
        //     'connect/nodesdk/overview',
        //     'connect/nodesdk/api',
        //   ]
        // },
        // 'connect/webrtc-interoperability',
        // 'connect/securing-the-signaling-channel',
        // 'connect/sending-call-events-to-nats'
      ],
    },
    'community',
    'faqs',
    // 'changelog'
  ],
};

module.exports = sidebars;

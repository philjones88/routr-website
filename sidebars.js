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
        // 'overview/concepts',
        'overview/deploy-with-docker',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Alterations API',
    //   collapsible: true,
    //   collapsed: true,
    //   items: [
    //     'alterations/introduction',
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Connect Mode',
    //   collapsible: true,
    //   collapsed: true,
    //   items: [
    //     'connect/introduction',
    //     // 'connect/concepts',
    //     'connect/components',
    //     {
    //       type: 'category',
    //       label: 'Quick Start',
    //       collapsible: true,
    //       collapsed: true,
    //       items: [
    //         'connect/quick-start/docker',
    //         'connect/quick-start/kubernetes',
    //       ]
    //     },
    //     'connect/ctl',
    //     'connect/nodesdk',
    //   ],
    // },
    'community',
    'faqs',
    // 'changelog'
  ],
};

module.exports = sidebars;

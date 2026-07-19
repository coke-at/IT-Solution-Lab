(() => {
  const technologyDomains = [
    {
      id: 'network', code: 'N', title: 'Network', level: 64,
      summary: '构建方案设计所需的网络基础与流量视角。',
      skills: ['TCP/IP', 'VLAN', 'STP', 'OSPF', 'BGP', 'NAT', 'VPN', 'SD-WAN']
    },
    {
      id: 'security', code: 'S', title: 'Security', level: 72,
      summary: '从边界防护走向身份、终端与安全运营。',
      skills: ['Firewall', 'Zero Trust', 'EDR', 'SOC', '等保']
    },
    {
      id: 'cloud', code: 'C', title: 'Cloud', level: 43,
      summary: '理解云基础设施、资源交付与业务连续性。',
      skills: ['HCI', 'Virtualization', 'Cloud Platform', 'Backup']
    },
    {
      id: 'solution', code: 'A', title: 'Solution', level: 35,
      summary: '把技术能力转化为客户场景与方案表达。',
      skills: ['Architecture Design', 'Product Selection', 'Customer Scenario']
    }
  ];

  const productLabs = [
    {
      id: 'af', vendor: '深信服', name: 'AF', fullName: '下一代防火墙', category: '边界安全', level: 42, status: '模板已建立', tone: 'violet',
      positioning: '面向企业互联网出口与数据中心边界，提供访问控制、威胁检测、VPN 与安全运营能力。',
      modules: [
        { title: '网络模块', items: ['接口', 'VLAN', '路由', 'NAT'] },
        { title: '安全模块', items: ['ACL', 'IPS', 'AV', 'WAF', 'VPN'] }
      ],
      workflow: ['初始化', '网络配置', '策略配置', '安全模块配置', '日志分析'],
      troubleshooting: ['先确认路由与 NAT，再检查策略命中和会话。', '结合流量日志、安全日志与系统资源进行定界。'],
      presales: ['客户需要解决什么风险与运营问题？', '出口规模、业务类型与高可用要求是什么？', '哪些能力需要授权、联动或持续服务？']
    },
    { id: 'atrust', vendor: '深信服', name: 'aTrust', fullName: '零信任访问平台', category: '身份与访问', level: 16, status: '待补充', tone: 'blue', positioning: '建立身份驱动的安全访问能力。', modules: [], workflow: [], troubleshooting: [], presales: [] },
    { id: 'edr', vendor: '深信服', name: 'EDR', fullName: '终端检测与响应', category: '终端安全', level: 18, status: '待补充', tone: 'cyan', positioning: '覆盖终端防护、检测、响应和运营闭环。', modules: [], workflow: [], troubleshooting: [], presales: [] },
    { id: 'sip', vendor: '深信服', name: 'SIP', fullName: '安全感知与运营平台', category: '安全运营', level: 12, status: '待补充', tone: 'amber', positioning: '聚合安全数据，支持分析、告警与运营。', modules: [], workflow: [], troubleshooting: [], presales: [] },
    { id: 'hci', vendor: '深信服', name: 'HCI', fullName: '超融合基础设施', category: '云基础设施', level: 26, status: '待补充', tone: 'indigo', positioning: '统一交付计算、存储、网络与云平台能力。', modules: [], workflow: [], troubleshooting: [], presales: [] },
    { id: 'ac', vendor: '深信服', name: 'AC', fullName: '上网行为管理', category: '网络与行为', level: 24, status: '待补充', tone: 'green', positioning: '提供应用识别、流量管理、访问控制与行为审计。', modules: [], workflow: [], troubleshooting: [], presales: [] }
  ];

  const futureVendors = [
    { name: '华为', focus: '网络、安全与云平台', code: 'HW' },
    { name: 'H3C', focus: '网络、云与安全', code: 'H3C' },
    { name: '奇安信', focus: '安全产品与运营', code: 'QAX' },
    { name: '绿盟', focus: '攻防与安全运营', code: 'NS' },
    { name: '天融信', focus: '边界与综合安全', code: 'TOP' }
  ];

  window.itSolutionLab = { technologyDomains, productLabs, futureVendors };

  const pageTitles = {
    home: 'IT Solution Lab · 工程师成长实验室',
    technology: 'Technology Map · IT Solution Lab',
    products: 'Product Lab · IT Solution Lab',
    comparison: 'Vendor Comparison · IT Solution Lab',
    solutions: 'Solution Center · IT Solution Lab',
    labs: 'Lab 实验室 · IT Solution Lab',
    dashboard: '成长 Dashboard · IT Solution Lab',
    resources: '设备知识库 · IT Solution Lab'
  };

  const routeAliases = { catalog: 'resources', vendors: 'resources', guide: 'resources' };
  const pageNodes = [...document.querySelectorAll('[data-page]')];
  const routeNodes = [...document.querySelectorAll('[data-route]')];

  function resolveRoute(raw) {
    const route = (raw || 'home').replace(/^#/, '');
    if (routeAliases[route]) return routeAliases[route];
    return pageTitles[route] ? route : 'home';
  }

  function showPage(rawRoute, options = {}) {
    const originalRoute = (rawRoute || 'home').replace(/^#/, '');
    const route = resolveRoute(originalRoute);
    pageNodes.forEach(page => {
      const active = page.dataset.page === route;
      page.classList.toggle('active', active);
      page.setAttribute('aria-hidden', String(!active));
    });
    routeNodes.forEach(node => node.classList.toggle('active', node.dataset.route === route));
    document.body.dataset.route = route;
    document.title = pageTitles[route];
    document.body.classList.remove('nav-open');
    const menu = document.querySelector('#menuToggle');
    if (menu) menu.setAttribute('aria-expanded', 'false');

    if (options.updateHash !== false) history.replaceState(null, '', `#${route}`);
    if (options.scroll !== false) window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });

    if (route === 'resources' && routeAliases[originalRoute]) {
      requestAnimationFrame(() => document.querySelector(`#${originalRoute}`)?.scrollIntoView({ behavior: options.instant ? 'auto' : 'smooth' }));
    }
  }

  document.addEventListener('click', event => {
    const routeTarget = event.target.closest('[data-route]');
    if (routeTarget) {
      event.preventDefault();
      showPage(routeTarget.dataset.route);
    }
  });

  window.addEventListener('hashchange', () => showPage(location.hash.slice(1), { updateHash: false }));

  const menu = document.querySelector('#menuToggle');
  menu?.addEventListener('click', () => requestAnimationFrame(() => {
    menu.setAttribute('aria-expanded', String(document.body.classList.contains('nav-open')));
  }));

  const root = document.documentElement;
  const themeButton = document.querySelector('#theme');
  root.classList.remove('dark');
  root.classList.toggle('light', localStorage.theme === 'light');
  if (themeButton) {
    themeButton.onclick = () => {
      const light = root.classList.toggle('light');
      localStorage.theme = light ? 'light' : 'dark';
      themeButton.setAttribute('aria-label', light ? '切换为深色主题' : '切换为明亮主题');
    };
  }

  function renderTechnologyMap() {
    const grid = document.querySelector('#technologyGrid');
    if (!grid) return;
    grid.innerHTML = technologyDomains.map((domain, index) => `
      <article class="technology-card tech-${domain.id}">
        <div class="tech-card-head"><i>${domain.code}</i><span>${String(index + 1).padStart(2, '0')} / DOMAIN</span><b>${domain.level}%</b></div>
        <h2>${domain.title}</h2>
        <p>${domain.summary}</p>
        <div class="domain-progress"><b style="--level:${domain.level}%"></b></div>
        <div class="skill-chips">${domain.skills.map((skill, skillIndex) => `<span class="${skillIndex < Math.ceil(domain.skills.length * domain.level / 100) ? 'learned' : ''}">${skill}</span>`).join('')}</div>
        <div class="tech-card-foot"><span>${domain.skills.length} 个技能节点</span><em>${index === 1 ? '当前重点' : '持续学习'}</em></div>
      </article>`).join('');
  }

  function renderProductLabs(vendor = '深信服') {
    const grid = document.querySelector('#productLabGrid');
    if (!grid) return;
    if (vendor === '未来厂商') {
      grid.innerHTML = futureVendors.map((item, index) => `
        <article class="future-vendor-card">
          <div class="future-code">${item.code}</div><span>${String(index + 1).padStart(2, '0')} / ROADMAP</span>
          <h2>${item.name}</h2><p>${item.focus}</p>
          <div class="future-state"><i></i> 预留扩展位置</div>
        </article>`).join('');
      return;
    }
    grid.innerHTML = productLabs.map((product, index) => `
      <article class="product-lab-card tone-${product.tone} ${product.status === '模板已建立' ? 'featured' : ''}">
        <div class="product-card-head"><span>${String(index + 1).padStart(2, '0')} / SANGFOR</span><em>${product.status}</em></div>
        <div class="product-symbol">${product.name}</div>
        <small>${product.category}</small><h2>${product.fullName}</h2><p>${product.positioning}</p>
        <div class="product-progress"><i><b style="--level:${product.level}%"></b></i><span>${product.level}%</span></div>
        <button data-product-open="${product.id}">${product.status === '模板已建立' ? '打开学习模板' : '查看模板结构'} <b>→</b></button>
      </article>`).join('');
  }

  function productTemplate(product) {
    const hasContent = product.modules.length > 0;
    const moduleMarkup = hasContent ? product.modules.map(module => `<article><span>${module.title}</span><div>${module.items.map(item => `<b>${item}</b>`).join('')}</div></article>`).join('') : '<div class="template-empty">模块清单待学习后补充</div>';
    const workflowMarkup = hasContent ? product.workflow.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span><small>STEP ${index + 1}</small>${item}</span></li>`).join('') : '<li class="empty-step">配置流程模板已就绪</li>';
    const troubleMarkup = hasContent ? product.troubleshooting.map(item => `<li>${item}</li>`).join('') : '<li>常见问题与排查思路待补充</li>';
    const presalesMarkup = hasContent ? product.presales.map(item => `<li>${item}</li>`).join('') : '<li>客户需求、适用场景与选型问题待补充</li>';
    return `
      <div class="lab-dialog-head"><span>${product.vendor} / PRODUCT LAB</span><div class="dialog-title"><i>${product.name}</i><div><h2>${product.fullName}</h2><p>${product.category} · ${product.status}</p></div></div></div>
      <section class="dialog-positioning"><span>01 / 产品定位</span><h3>解决什么问题？</h3><p>${product.positioning}</p></section>
      <section class="dialog-section"><div class="dialog-section-title"><span>02 / 核心模块</span><h3>从能力结构理解产品</h3></div><div class="module-grid">${moduleMarkup}</div></section>
      <section class="dialog-section"><div class="dialog-section-title"><span>03 / 配置流程</span><h3>建立可重复的实施路径</h3></div><ol class="workflow-list">${workflowMarkup}</ol></section>
      <div class="dialog-two-col">
        <section><span>04 / 故障排查</span><h3>从现象走向证据</h3><ul>${troubleMarkup}</ul></section>
        <section><span>05 / 售前思考</span><h3>从产品走向客户</h3><ul>${presalesMarkup}</ul></section>
      </div>
      <p class="dialog-note">这是可持续扩展的学习模板。具体配置命令、版本差异和授权能力以后续学习记录与官方资料为准。</p>`;
  }

  const productDialog = document.querySelector('#productLabDialog');
  const productBody = document.querySelector('#productLabBody');
  function openProductLab(id) {
    const product = productLabs.find(item => item.id === id);
    if (!product || !productDialog || !productBody) return;
    productBody.innerHTML = productTemplate(product);
    productDialog.showModal();
  }

  document.addEventListener('click', event => {
    const productButton = event.target.closest('[data-product-open]');
    if (productButton) openProductLab(productButton.dataset.productOpen);
    const vendorButton = event.target.closest('[data-lab-vendor]');
    if (vendorButton) {
      document.querySelectorAll('[data-lab-vendor]').forEach(button => button.classList.toggle('active', button === vendorButton));
      renderProductLabs(vendorButton.dataset.labVendor);
    }
  });

  document.querySelector('[data-lab-close]')?.addEventListener('click', () => productDialog?.close());
  productDialog?.addEventListener('click', event => { if (event.target === productDialog) productDialog.close(); });

  renderTechnologyMap();
  renderProductLabs();
  showPage(location.hash.slice(1) || 'home', { updateHash: false, scroll: false, instant: true });
})();

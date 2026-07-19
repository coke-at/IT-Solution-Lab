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
    {
      id: 'atrust', vendor: '深信服', name: 'aTrust', fullName: '零信任访问平台', category: '身份与访问', level: 34, status: '模板已建立', tone: 'blue',
      positioning: '面向远程办公、分支访问和第三方接入，以持续身份验证和最小权限控制替代对网络位置的默认信任。',
      modules: [
        { title: '身份与终端', items: ['身份源', '多因素认证', '终端检查', '动态授权'] },
        { title: '访问与策略', items: ['应用发布', '访问策略', '微隔离', '行为审计'] }
      ],
      workflow: ['对接身份源', '纳管应用', '建立终端基线', '配置访问策略', '验证审计闭环'],
      troubleshooting: ['先区分身份认证、终端检查、应用代理和后端业务四个故障域。', '结合登录日志、策略命中、终端状态和应用连通性逐层验证。'],
      presales: ['哪些人员、终端和应用需要从何处访问？', '现有 VPN 的权限粒度、暴露面和运维痛点是什么？', '身份源、终端类型和关键应用是否满足集成条件？']
    },
    {
      id: 'edr', vendor: '深信服', name: 'EDR', fullName: '终端检测与响应', category: '终端安全', level: 36, status: '模板已建立', tone: 'cyan',
      positioning: '面向服务器和办公终端，建立资产发现、恶意行为检测、事件响应与终端运营的持续防护闭环。',
      modules: [
        { title: '终端防护', items: ['资产盘点', '病毒防护', '漏洞风险', '外设控制'] },
        { title: '检测响应', items: ['行为检测', '事件调查', '隔离处置', '威胁狩猎'] }
      ],
      workflow: ['部署管理平台', '安装终端 Agent', '建立防护基线', '验证告警处置', '形成运营报表'],
      troubleshooting: ['先检查 Agent 在线、策略下发和特征更新，再分析告警证据链。', '处置异常终端前保留进程、网络连接、文件和用户行为证据。'],
      presales: ['终端数量、操作系统分布和重点资产范围是什么？', '客户更关注合规防病毒、勒索防护还是高级威胁响应？', '现有桌面管理、SOC 和应急流程如何联动？']
    },
    {
      id: 'sip', vendor: '深信服', name: 'SIP', fullName: '安全感知与运营平台', category: '安全运营', level: 31, status: '模板已建立', tone: 'amber',
      positioning: '汇聚网络、终端和安全设备的数据，对威胁线索进行关联分析、告警研判和闭环运营。',
      modules: [
        { title: '数据与分析', items: ['日志接入', '资产画像', '威胁情报', '关联分析'] },
        { title: '运营与响应', items: ['告警研判', '事件处置', '态势展示', '运营报表'] }
      ],
      workflow: ['梳理数据源', '完成日志接入', '校准资产画像', '配置运营规则', '复盘处置效果'],
      troubleshooting: ['先确认数据源时间、格式和采集状态，再检查解析、关联与告警规则。', '告警研判应回到原始日志、受影响资产和攻击链证据，避免只看风险分值。'],
      presales: ['客户已有多少安全设备和可用数据源？', '谁负责日常研判，告警如何升级和闭环？', '平台建设目标是合规展示、实战运营还是托管服务？']
    },
    {
      id: 'hci', vendor: '深信服', name: 'HCI', fullName: '超融合基础设施', category: '云基础设施', level: 39, status: '模板已建立', tone: 'indigo',
      positioning: '将计算、分布式存储、虚拟网络和统一管理整合为资源平台，支撑业务快速交付与基础设施简化运维。',
      modules: [
        { title: '资源基础', items: ['计算虚拟化', '分布式存储', '虚拟网络', '资源调度'] },
        { title: '可靠与运维', items: ['高可用', '备份容灾', '监控告警', '容量管理'] }
      ],
      workflow: ['完成容量规划', '部署集群网络', '初始化资源池', '迁移验证业务', '执行高可用验收'],
      troubleshooting: ['先检查物理链路、集群健康和资源水位，再定位计算、存储或网络故障域。', '性能问题需同时核对业务负载、资源争用、存储时延和网络吞吐。'],
      presales: ['业务规模、性能基线和未来三年增长量是多少？', '哪些系统要求高可用、备份、容灾或不停机迁移？', '现有虚拟化授权、运维能力和改造窗口如何约束方案？']
    },
    {
      id: 'ac', vendor: '深信服', name: 'AC', fullName: '上网行为管理', category: '网络与行为', level: 37, status: '模板已建立', tone: 'green',
      positioning: '面向互联网出口和园区网络，对用户、应用与带宽进行识别、控制、优化和合规审计。',
      modules: [
        { title: '识别与接入', items: ['用户认证', '组织同步', '应用识别', '终端识别'] },
        { title: '策略与运营', items: ['访问控制', '流量管理', '行为审计', '报表分析'] }
      ],
      workflow: ['规划部署模式', '对接用户身份', '识别应用流量', '配置控制策略', '验证审计报表'],
      troubleshooting: ['先确认部署模式、流量路径和用户识别状态，再检查应用识别与策略优先级。', '带宽问题应区分链路容量、单用户占用、应用突发和策略限速。'],
      presales: ['出口带宽、并发用户和主要应用分布是什么？', '客户更关注效率、带宽体验、合规审计还是内容风险？', '身份认证、日志留存和隐私边界有哪些要求？']
    }
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

  const navToolsToggle = document.querySelector('[data-nav-tools]');
  const navToolsPanel = document.querySelector('#navToolsPanel');
  navToolsToggle?.addEventListener('click', () => {
    const expanded = navToolsToggle.getAttribute('aria-expanded') === 'true';
    navToolsToggle.setAttribute('aria-expanded', String(!expanded));
    navToolsPanel.hidden = expanded;
  });

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

  function renderHomeContent() {
    const directionGrid = document.querySelector('#homeDirectionGrid');
    const directionNames = { network: '网络', security: '安全', cloud: '云计算', solution: '解决方案架构' };
    if (directionGrid) {
      directionGrid.innerHTML = technologyDomains.map(domain => `
        <article class="home-direction-card">
          <small>${domain.title}</small>
          <h3>${directionNames[domain.id]}</h3>
          <p>${domain.summary}</p>
          <button data-route="technology">进入技术地图 →</button>
        </article>`).join('');
    }

    const productGrid = document.querySelector('#homeProductGrid');
    const featuredProductIds = ['af', 'atrust', 'hci'];
    if (productGrid) {
      productGrid.innerHTML = productLabs.filter(product => featuredProductIds.includes(product.id)).map(product => `
        <article class="home-product-card tone-${product.tone}">
          <div class="home-product-head"><b>${product.name}</b><small>${product.category}</small></div>
          <h3>${product.fullName}</h3>
          <p>${product.positioning}</p>
          <button data-product-open="${product.id}">打开学习模板 →</button>
        </article>`).join('');
    }
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

  const productFilterState = { vendor: '全部', category: '全部' };

  function getProductGroup(product) {
    if (product.category === '云基础设施') return '云计算与数据中心';
    if (['身份与访问', '终端安全'].includes(product.category)) return '终端与访问安全';
    return '网络安全';
  }

  function renderProductLabs() {
    const grid = document.querySelector('#productLabGrid');
    if (!grid) return;
    const filteredProducts = productLabs.filter(product => {
      const matchesVendor = productFilterState.vendor === '全部' || product.vendor === productFilterState.vendor;
      const matchesCategory = productFilterState.category === '全部' || getProductGroup(product) === productFilterState.category;
      return matchesVendor && matchesCategory;
    });
    const resultCount = document.querySelector('#productResultCount');
    if (resultCount) resultCount.textContent = `共 ${filteredProducts.length} 个产品`;
    if (!filteredProducts.length) {
      grid.innerHTML = '<div class="product-empty-state"><b>暂无匹配内容</b><p>当前分类暂未整理产品内容。</p></div>';
      return;
    }
    grid.innerHTML = filteredProducts.map((product, index) => `
      <article class="product-lab-card tone-${product.tone}">
        <div class="product-card-head"><span>${product.vendor}</span><em>${getProductGroup(product)}</em></div>
        <div class="product-symbol">${product.name}</div>
        <small>${product.category}</small><h2>${product.name} · ${product.fullName}</h2><p>${product.positioning}</p>
        <div class="product-progress"><i><b style="--level:${product.level}%"></b></i><span>${product.status} · ${product.level}%</span></div>
        <button data-product-open="${product.id}">进入产品实验室 <b>→</b></button>
      </article>`).join('');
  }

  function productTemplate(product) {
    const hasContent = product.modules.length > 0;
    const moduleMarkup = hasContent ? product.modules.map(module => `<article><span>${module.title}</span><div>${module.items.map(item => `<b>${item}</b>`).join('')}</div></article>`).join('') : '<div class="template-empty">模块清单待学习后补充</div>';
    const workflowMarkup = hasContent ? product.workflow.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span><small>STEP ${index + 1}</small>${item}</span></li>`).join('') : '<li class="empty-step">配置流程模板已就绪</li>';
    const troubleMarkup = hasContent ? product.troubleshooting.map(item => `<li>${item}</li>`).join('') : '<li>常见问题与排查思路待补充</li>';
    const presalesMarkup = hasContent ? product.presales.map(item => `<li>${item}</li>`).join('') : '<li>客户需求、适用场景与选型问题待补充</li>';
    return `
      <div class="lab-dialog-head"><span>${product.vendor} / PRODUCT LAB</span><div class="dialog-title"><i>${product.name}</i><div><h2>${product.fullName}</h2><p>${getProductGroup(product)} · ${product.category}</p></div></div><div class="dialog-progress"><span>${product.status}</span><i><b style="--level:${product.level}%"></b></i><em>${product.level}%</em></div></div>
      <section class="dialog-positioning"><span>01 / 产品定位与适用场景</span><h3>解决什么问题？适合什么场景？</h3><p>${product.positioning}</p></section>
      <section class="dialog-section"><div class="dialog-section-title"><span>02 / 核心模块</span><h3>从能力结构理解产品</h3></div><div class="module-grid">${moduleMarkup}</div></section>
      <section class="dialog-section"><div class="dialog-section-title"><span>03 / 基础配置</span><h3>建立可重复的实施路径</h3></div><ol class="workflow-list">${workflowMarkup}</ol></section>
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
      productFilterState.vendor = vendorButton.dataset.labVendor;
      document.querySelectorAll('[data-lab-vendor]').forEach(button => {
        const active = button === vendorButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderProductLabs();
    }
    const categoryButton = event.target.closest('[data-lab-category]');
    if (categoryButton) {
      productFilterState.category = categoryButton.dataset.labCategory;
      document.querySelectorAll('[data-lab-category]').forEach(button => {
        const active = button === categoryButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderProductLabs();
    }
  });

  document.querySelector('[data-lab-close]')?.addEventListener('click', () => productDialog?.close());
  productDialog?.addEventListener('click', event => { if (event.target === productDialog) productDialog.close(); });

  renderHomeContent();
  renderTechnologyMap();
  renderProductLabs();
  showPage(location.hash.slice(1) || 'home', { updateHash: false, scroll: false, instant: true });
})();

const products=[
{n:'下一代防火墙 AF',c:'网络',tag:'边界安全',d:'以 AI、云端威胁情报与本地检测引擎强化网络边界防护。',tech:['AI-Inline','威胁情报','入侵防御'],scene:'互联网出口、数据中心边界、分支边界',url:'https://www.sangfor.com.cn/sangfor-security/afs'},
{n:'SASE',c:'网络',tag:'云网安融合',d:'融合 SD-WAN 与云化安全能力，统一连接和保护分支与移动办公。',tech:['SD-WAN','SWG','ZTNA'],scene:'多分支组网、移动办公、云访问',url:'https://www.sangfor.com.cn/sangfor-security/sase'},
{n:'零信任访问平台',c:'网络',tag:'身份与访问',d:'以持续信任评估和动态访问控制保护应用访问。',tech:['ZTNA','持续评估','最小权限'],scene:'远程访问、第三方接入、应用隐身'},
{n:'应用交付 AD',c:'网络',tag:'应用交付',d:'面向关键应用的流量调度、可用性与访问体验优化。',tech:['负载均衡','链路优化','高可用'],scene:'关键业务发布、多数据中心、链路优化'},
{n:'统一端点安全 aES',c:'终端',tag:'端点安全',d:'统一终端威胁防护、检测响应与安全管理。',tech:['EPP','EDR','端网协同'],scene:'办公终端、服务器、勒索防护'},
{n:'桌面云 aDesk',c:'终端',tag:'数字办公',d:'集中承载和交付虚拟桌面，兼顾体验、数据安全与运维。',tech:['VDI','桌面协议','集中管控'],scene:'研发办公、教学桌面、分支办公'},
{n:'上网行为管理 AC',c:'终端',tag:'行为管理',d:'提供上网可视、带宽管理、访问控制与行为审计。',tech:['应用识别','流量控制','行为审计'],scene:'园区出口、无线办公、合规审计'},
{n:'SSL VPN',c:'终端',tag:'远程接入',d:'为远程用户提供加密、受控的业务系统访问通道。',tech:['加密隧道','多因素认证','细粒度授权'],scene:'远程办公、运维接入、合作伙伴访问'},
{n:'Web 应用防火墙 WAF',c:'应用',tag:'应用安全',d:'围绕 Web 业务与 API 提供攻击检测和阻断能力。',tech:['Web防护','Bot防护','API安全'],scene:'门户、电商、互联网业务'},
{n:'数据安全平台 DASP',c:'应用',tag:'数据安全',d:'围绕数据识别、风险发现、访问治理与持续运营形成闭环。',tech:['分类分级','风险监测','访问治理'],scene:'敏感数据治理、合规建设、数据流转'},
{n:'云安全中心',c:'应用',tag:'云安全',d:'以软件定义方式融合多类安全能力，保护云上工作负载与业务。',tech:['安全资源池','微隔离','统一运营'],scene:'私有云、混合云、云上等保'},
{n:'网站云防护 · 云盾',c:'应用',tag:'云防护服务',d:'融合评估、防护、监测和响应，提供网站安全托管。',tech:['云WAF','风险评估','专家值守'],scene:'公网网站、活动保障、安全代运维',url:'https://www.sangfor.com.cn/sangfor-security/website-cloud-shield'},
{n:'安全GPT',c:'运营',tag:'安全大模型',d:'面向检测、告警研判、事件闭环和数据安全工作的 AI 助手。',tech:['安全大模型','智能研判','自动化闭环'],scene:'安全运营中心、告警降噪、知识辅助'},
{n:'XDR 平台',c:'运营',tag:'扩展检测响应',d:'汇聚端、网、云多源信号，关联分析并联动处置。',tech:['多源遥测','关联分析','SOAR'],scene:'威胁检测、事件调查、自动响应'},
{n:'安全托管服务',c:'运营',tag:'MSS',d:'以云端平台、AI 与安全专家提供持续监测和响应服务。',tech:['MDR','专家运营','效果保障'],scene:'人员不足、持续运营、重大保障'},
{n:'安全感知平台',c:'运营',tag:'态势感知',d:'对资产、威胁与安全事件进行全局可视和分析。',tech:['安全大数据','UEBA','态势可视'],scene:'监管运营、集团安全、攻防演练'},
{n:'超融合 HCI',c:'云',tag:'基础架构',d:'融合计算、存储、网络和虚拟化，构建统一云基础设施。',tech:['计算虚拟化','分布式存储','网络虚拟化'],scene:'数据中心整合、私有云、信创改造'},
{n:'企业级分布式存储 EDS',c:'云',tag:'数据基础设施',d:'面向结构化与非结构化数据提供横向扩展的存储能力。',tech:['块/文件/对象','横向扩展','多副本'],scene:'虚拟化、备份归档、海量非结构化数据'},
{n:'云计算平台 SCP',c:'云',tag:'云管理',d:'统一管理异构资源并向上提供计算、存储、网络和安全服务。',tech:['多云管理','服务目录','运营计量'],scene:'私有云、混合云、资源统一管理'},
{n:'托管云',c:'云',tag:'云服务',d:'以分布式云节点与本地化服务交付安全可靠的云资源。',tech:['同构混合云','云管服务','安全内建'],scene:'就近上云、混合云、灾备上云'},
{n:'云容灾服务',c:'云',tag:'业务连续性',d:'基于同架构混合云构建异地容灾和业务快速恢复能力。',tech:['复制保护','容灾编排','一键恢复'],scene:'核心业务容灾、异地备份、连续性保障',url:'https://www.sangfor.com.cn/sangfor-cloud/adr'}];
let active='全部';const grid=document.querySelector('#grid'),search=document.querySelector('#search'),empty=document.querySelector('#empty');
function render(){const q=search.value.trim().toLowerCase();const rows=products.filter(p=>(active==='全部'||p.c===active)&&(`${p.n}${p.tag}${p.d}${p.tech.join('')}${p.scene}`).toLowerCase().includes(q));grid.innerHTML=rows.map((p,i)=>`<button class="card" data-name="${p.n}" style="--i:${i}"><span class="num">${String(products.indexOf(p)+1).padStart(2,'0')}</span><span class="pill ${p.c}">${p.c}</span><h3>${p.n}</h3><p>${p.d}</p><div>${p.tech.map(t=>`<small>${t}</small>`).join('')}</div><i>查看详情 ↗</i></button>`).join('');empty.style.display=rows.length?'none':'block'}
document.querySelector('#filters').onclick=e=>{if(!e.target.dataset.filter)return;active=e.target.dataset.filter;document.querySelectorAll('#filters button').forEach(b=>b.classList.toggle('active',b===e.target));render()};search.oninput=render;
document.querySelectorAll('[data-filter-link]').forEach(a=>a.onclick=()=>{active=a.dataset.filterLink;document.querySelectorAll('#filters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===active));render()});
grid.onclick=e=>{const card=e.target.closest('.card');if(!card)return;const p=products.find(x=>x.n===card.dataset.name);document.querySelector('#modalBody').innerHTML=`<span class="pill ${p.c}">${p.c} · ${p.tag}</span><h2>${p.n}</h2><p class="modaldesc">${p.d}</p><h4>核心技术关键词</h4><div class="chips">${p.tech.map(x=>`<span>${x}</span>`).join('')}</div><h4>典型场景</h4><p>${p.scene}</p>${p.url?`<a class="primary" target="_blank" rel="noopener" href="${p.url}">查看官方产品页 ↗</a>`:''}`;document.querySelector('#modal').showModal()};
document.querySelector('.close').onclick=()=>document.querySelector('#modal').close();document.querySelector('#modal').onclick=e=>{if(e.target.id==='modal')e.target.close()};
const theme=document.querySelector('#theme');theme.onclick=()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');render();

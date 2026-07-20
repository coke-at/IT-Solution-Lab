(() => {
  const technologyDomains = [
    {
      id: 'network', code: 'N', title: 'Network', titleCn: '网络', level: 64, status: 'completed', statusLabel: '阶段已完成', entryRoute: 'labs', entryLabel: '进入网络实验',
      summary: '构建方案设计所需的网络基础与流量视角。',
      skills: ['TCP/IP', 'VLAN', 'STP', 'OSPF', 'BGP', 'NAT', 'VPN', 'SD-WAN']
    },
    {
      id: 'security', code: 'S', title: 'Security', titleCn: '安全', level: 72, status: 'current', statusLabel: '正在学习', entryRoute: 'products', entryLabel: '进入产品实验室',
      summary: '从边界防护走向身份、终端与安全运营。',
      skills: ['Firewall', 'Zero Trust', 'EDR', 'SOC', '等保']
    },
    {
      id: 'cloud', code: 'C', title: 'Cloud', titleCn: '云计算', level: 43, status: 'planned', statusLabel: '待系统补全', entryProduct: 'hci', entryLabel: '学习 HCI 产品',
      summary: '理解云基础设施、资源交付与业务连续性。',
      skills: ['HCI', 'Virtualization', 'Cloud Platform', 'Backup']
    },
    {
      id: 'solution', code: 'A', title: 'Solution', titleCn: '解决方案', level: 35, status: 'planned', statusLabel: '目标能力', entryRoute: 'solutions', entryLabel: '进入方案中心',
      summary: '把技术能力转化为客户场景与方案表达。',
      skills: ['Architecture Design', 'Product Selection', 'Customer Scenario']
    }
  ];

  const productLabs = [
    {
      id: 'af', vendor: '深信服', name: 'AF', fullName: '下一代防火墙', category: '边界安全', level: 42, status: '模板已建立', tone: 'violet',
      positioning: '面向企业互联网出口与数据中心边界，提供访问控制、威胁检测、VPN 与安全运营能力。',
      customerProblems: ['互联网出口暴露面缺少统一控制', '访问策略、地址转换与安全检测相互割裂', '安全事件发生后缺少可关联的会话与日志证据'],
      modules: [
        { title: '网络模块', items: ['接口', 'VLAN', '路由', 'NAT'] },
        { title: '安全模块', items: ['ACL', 'IPS', 'AV', 'WAF', 'VPN'] }
      ],
      workflow: ['初始化：确认部署模式、接口角色与管理边界', '网络配置：建立可解释的路由与流量路径', '策略配置：关联地址对象、访问规则与 NAT', '安全模块：按业务风险规划检测与防护能力', '日志分析：验证会话、策略命中与安全事件关联'],
      troubleshooting: ['先确认链路、路由与 NAT，再检查策略命中和会话。', '结合流量日志、安全日志与系统资源逐层缩小故障范围。', '策略已命中但业务异常时，继续核对应用依赖、返回路径与安全检测动作。'],
      presales: ['客户需要解决哪些出口风险与运营问题？', '出口规模、业务类型与高可用要求是什么？', '现网路由、地址规划和安全策略由谁维护？', '哪些能力需要与终端、身份或安全运营平台联动？']
    },
    {
      id: 'atrust', vendor: '深信服', name: 'aTrust', fullName: '零信任访问平台', category: '身份与访问', level: 34, status: '模板已建立', tone: 'blue',
      positioning: '面向远程办公、分支访问和第三方接入，以持续身份验证和最小权限控制替代对网络位置的默认信任。',
      customerProblems: ['传统远程接入容易形成过大的网络访问范围', '第三方和临时人员权限缺少按应用细分', '身份、终端状态与访问行为难以形成持续校验'],
      modules: [
        { title: '身份与终端', items: ['身份源', '多因素认证', '终端检查', '动态授权'] },
        { title: '访问与策略', items: ['应用发布', '访问策略', '微隔离', '行为审计'] }
      ],
      workflow: ['身份准备：梳理人员、组织与认证来源', '应用纳管：明确应用入口和后端访问边界', '终端基线：定义接入前需要检查的终端条件', '访问策略：按人员、终端和应用建立最小权限', '审计验证：检查登录、策略命中与应用访问记录'],
      troubleshooting: ['先区分身份认证、终端检查、应用代理和后端业务四个故障域。', '结合登录日志、策略命中、终端状态和应用连通性逐层验证。', '同一用户结果不一致时，核对身份属性、终端状态和策略优先级是否发生变化。'],
      presales: ['哪些人员、终端和应用需要从何处访问？', '现有 VPN 的权限粒度、暴露面和运维痛点是什么？', '身份源、终端类型和关键应用是否满足集成条件？', '第三方、临时人员和高权限账号如何审批与回收访问权限？']
    },
    {
      id: 'edr', vendor: '深信服', name: 'EDR', fullName: '终端检测与响应', category: '终端安全', level: 36, status: '模板已建立', tone: 'cyan',
      positioning: '面向服务器和办公终端，建立资产发现、恶意行为检测、事件响应与终端运营的持续防护闭环。',
      customerProblems: ['终端资产和安全基线缺少持续可见性', '恶意行为出现后难以快速定位影响范围', '告警、隔离、调查和恢复过程缺少统一记录'],
      modules: [
        { title: '终端防护', items: ['资产盘点', '病毒防护', '漏洞风险', '外设控制'] },
        { title: '检测响应', items: ['行为检测', '事件调查', '隔离处置', '威胁狩猎'] }
      ],
      workflow: ['范围规划：确认终端类型、重点资产与管理边界', '终端纳管：验证 Agent 在线和策略接收状态', '基线建立：按资产角色定义基础防护与监测要求', '告警处置：记录检测、调查、隔离和恢复过程', '运营复盘：汇总资产风险、事件证据与改进项'],
      troubleshooting: ['先检查 Agent 在线、策略下发和组件状态，再分析告警证据链。', '处置异常终端前保留进程、网络连接、文件和用户行为证据。', '告警未形成闭环时，继续核对事件分派、隔离动作和恢复确认是否有记录。'],
      presales: ['终端数量、操作系统分布和重点资产范围是什么？', '客户更关注基础防护、勒索风险还是高级威胁响应？', '现有桌面管理、SOC 和应急流程如何联动？', '服务器、办公终端和特殊终端是否需要采用不同的管理边界？']
    },
    {
      id: 'sip', vendor: '深信服', name: 'SIP', fullName: '安全感知与运营平台', category: '安全运营', level: 31, status: '模板已建立', tone: 'amber',
      positioning: '汇聚网络、终端和安全设备的数据，对威胁线索进行关联分析、告警研判和闭环运营。',
      customerProblems: ['多类安全设备日志分散，难以关联同一事件', '告警数量与处置能力不匹配，优先级难以判断', '事件从发现、研判到关闭缺少统一运营流程'],
      modules: [
        { title: '数据与分析', items: ['日志接入', '资产画像', '威胁情报', '关联分析'] },
        { title: '运营与响应', items: ['告警研判', '事件处置', '态势展示', '运营报表'] }
      ],
      workflow: ['数据梳理：确认设备、日志类型与采集责任边界', '日志接入：验证时间、字段和持续采集状态', '资产校准：建立业务资产与安全事件的关联基础', '运营规则：定义告警研判、升级与处置流程', '运营复盘：检查事件证据、处置记录与改进结论'],
      troubleshooting: ['先确认数据源时间、格式和采集状态，再检查解析、关联与告警规则。', '告警研判应回到原始日志、受影响资产和攻击链证据，避免只看风险分值。', '关联结果不稳定时，核对资产标识、时间一致性和不同数据源的字段质量。'],
      presales: ['客户已有多少安全设备和可用数据源？', '谁负责日常研判，告警如何升级和闭环？', '平台建设目标是合规展示、实战运营还是托管服务？', '哪些业务资产和事件类型需要优先形成运营闭环？']
    },
    {
      id: 'hci', vendor: '深信服', name: 'HCI', fullName: '超融合基础设施', category: '云基础设施', level: 39, status: '模板已建立', tone: 'indigo',
      positioning: '将计算、分布式存储、虚拟网络和统一管理整合为资源平台，支撑业务快速交付与基础设施简化运维。',
      customerProblems: ['计算、存储和虚拟网络分散建设导致运维边界复杂', '业务扩容与资源交付缺少统一规划视角', '高可用、备份和容量风险难以在同一平台持续检查'],
      modules: [
        { title: '资源基础', items: ['计算虚拟化', '分布式存储', '虚拟网络', '资源调度'] },
        { title: '可靠与运维', items: ['高可用', '备份容灾', '监控告警', '容量管理'] }
      ],
      workflow: ['需求梳理：确认业务类型、资源基线与连续性要求', '集群规划：明确节点、网络和故障域的设计边界', '资源初始化：建立计算、存储与虚拟网络资源池', '业务验证：按迁移范围检查业务启动与依赖关系', '运行检查：验证高可用、备份和容量监控流程'],
      troubleshooting: ['先检查物理链路、集群健康和资源水位，再定位计算、存储或网络故障域。', '资源体验异常时需同时核对业务负载、资源争用、存储时延和网络吞吐。', '故障恢复不符合预期时，继续检查业务依赖、资源调度和恢复流程记录。'],
      presales: ['现有业务规模、资源基线和增长趋势是什么？', '哪些系统要求高可用、备份、容灾或平滑迁移？', '现有虚拟化平台、运维能力和改造窗口如何约束方案？', '计算、存储、网络和备份分别由哪些团队负责？']
    },
    {
      id: 'ac', vendor: '深信服', name: 'AC', fullName: '上网行为管理', category: '网络与行为', level: 37, status: '模板已建立', tone: 'green',
      positioning: '面向互联网出口和园区网络，对用户、应用与带宽进行识别、控制、优化和合规审计。',
      customerProblems: ['出口流量缺少用户和应用维度的可见性', '关键业务与非关键流量之间存在带宽争用', '访问控制、行为审计和使用规范缺少统一策略'],
      modules: [
        { title: '识别与接入', items: ['用户认证', '组织同步', '应用识别', '终端识别'] },
        { title: '策略与运营', items: ['访问控制', '流量管理', '行为审计', '报表分析'] }
      ],
      workflow: ['部署规划：确认流量路径、接入方式与回退边界', '身份关联：建立用户、组织和终端的识别基础', '应用识别：观察主要业务与非业务流量分布', '策略设计：按角色、应用和时段组织控制规则', '审计验证：检查策略命中、带宽变化与行为记录'],
      troubleshooting: ['先确认部署模式、流量路径和用户识别状态，再检查应用识别与策略优先级。', '带宽问题应区分链路容量、单用户占用、应用突发和策略限速。', '用户或应用识别异常时，核对认证来源、流量特征和策略匹配条件。'],
      presales: ['出口带宽、并发用户和主要应用分布是什么？', '客户更关注效率、带宽体验、合规审计还是内容风险？', '身份认证、日志留存和隐私边界有哪些要求？', '哪些业务必须优先保障，哪些访问行为需要审批或审计？']
    }
  ];

  const labExperiments = [
    {
      id: 'enterprise-egress-security',
      name: '企业出口安全模拟',
      direction: '安全',
      type: '综合实验',
      status: '进行中',
      templateReady: true,
      stage: '配置实施与验证',
      summary: '验证出口防火墙基础网络、源 NAT、安全策略、日志分析和常见故障定位。',
      background: '模拟企业互联网出口安全场景，在可控环境中建立从网络连通到策略验证的完整实验记录。',
      objective: '跑通内网访问互联网，并记录策略命中、NAT 会话与日志验证方法。',
      environment: ['虚拟防火墙', '核心交换', '测试终端', '业务服务器'],
      skills: ['Routing', 'NAT', 'ACL', 'Logging'],
      topologyDescription: '测试终端流量经核心交换到达防火墙，由防火墙完成出口访问控制、地址转换与日志记录；业务服务器用于检查内网访问边界和返回路径。',
      configuration: ['初始化与接口规划：明确设备角色、流量方向和管理边界', '路由与地址对象：建立可解释的内外网路径与对象关系', '源 NAT 与访问策略：区分地址转换、策略放行和会话建立', '安全模块与日志：记录策略命中、安全事件和验证证据'],
      tests: [
        { name: '基础连通验证', status: '待记录', check: '检查测试终端到网关、出口和目标业务的流量路径是否连通。', evidence: '链路与路由路径可达；未达到时记录中断位置和相关现象。' },
        { name: 'NAT 会话验证', status: '待记录', check: '检查出口访问是否建立地址转换会话，并核对转换前后的流量关系。', evidence: '会话方向、转换关系和返回流量能够相互对应。' },
        { name: '安全策略验证', status: '待记录', check: '分别检查应允许与应拒绝的访问是否命中预期策略。', evidence: '策略动作、会话状态与测试意图一致，并保留命中记录。' },
        { name: '日志分析验证', status: '待记录', check: '关联流量日志、安全日志与测试步骤，检查时间、对象和动作是否一致。', evidence: '形成可以说明测试过程的日志证据；当前尚未记录实际结果。' }
      ],
      review: '复盘时按现象、影响范围、初步假设、检查证据、变更动作和验证结论记录；当前只建立复盘方法，尚未形成实际故障处理结果。'
    }
  ];

  const solutionCases = [
    {
      id: 'growth-enterprise-security-cloud-upgrade',
      name: '成长型企业安全与云基础设施升级',
      scenario: '综合方案',
      status: '正在完善',
      architectureReady: true,
      stage: '架构与产品组合',
      summary: '解决企业出口、远程访问、终端防护与云基础设施独立建设带来的管理和安全问题。',
      audience: '成长型多分支企业',
      templateType: '模板方案',
      domains: ['网络', '安全', '云计算'],
      background: '面向出口能力分散、远程访问缺少统一控制、终端与云平台独立运维的企业场景，建立可持续完善的方案模板。',
      problems: ['出口和分支访问分别建设时，安全策略与流量边界难以统一梳理', '远程人员、第三方和分支访问缺少身份与最小权限视角', '终端告警与安全运营数据相互分散，事件难以形成闭环证据', '云基础设施资源交付、连续性与日常运维需要统一规划'],
      objectives: ['建立出口、分支和远程访问的一致安全边界', '以身份、终端状态和应用范围组织访问控制', '连接终端防护、日志分析与事件处置流程', '形成计算、存储、虚拟网络和连续性能力的统一承载视角'],
      constraints: ['现网拓扑、容量与兼容性需要结合具体客户环境确认', '产品授权、实施窗口与回退条件待进一步补充', '当前尚未形成真实部署验证证据'],
      architecture: {
        ingress: 'Internet / Branch',
        securityProducts: ['af', 'atrust'],
        core: 'Core Network',
        serviceProducts: ['edr', 'hci', 'sip']
      },
      productReferences: [
        { id: 'af', reason: '作为出口安全边界，组织访问控制、地址转换、安全检测与日志记录。', problem: '出口与分支边界分散', capability: '边界访问控制与威胁防护' },
        { id: 'atrust', reason: '把远程和第三方访问从网络连通转为基于身份、终端和应用的精细控制。', problem: '远程访问权限过宽', capability: '身份验证与最小权限访问' },
        { id: 'edr', reason: '为服务器和办公终端提供持续可见、检测、调查与响应入口。', problem: '终端风险缺少闭环', capability: '终端检测与响应' },
        { id: 'hci', reason: '整合计算、存储和虚拟网络，为业务资源交付和连续性规划提供承载平台。', problem: '基础设施分散运维', capability: '统一资源承载与运维' },
        { id: 'sip', reason: '汇聚边界、终端和其他安全数据，支撑告警研判、事件升级和复盘。', problem: '安全数据与处置分散', capability: '安全分析与运营协同' }
      ],
      phases: [
        { name: '规划', objective: '把客户问题映射为安全、访问、终端和基础设施能力范围', status: '结构已建立', deliverable: '需求边界、能力映射、产品引用与风险清单' },
        { name: '部署', objective: '按边界、访问、终端和基础设施依赖顺序组织实施与联调', status: '待进一步补充', deliverable: '实施步骤、回退条件、联调记录与验证证据' },
        { name: '优化', objective: '结合日志、告警、容量和运维反馈持续校准方案', status: '待进一步补充', deliverable: '运行基线、问题复盘与持续改进建议' }
      ],
      risks: ['具体性能、容量、License 与兼容性需以正式选型和厂商资料为准', '实施窗口、业务影响和回退方案需结合现网确认', '本模板不代表已经完成的客户交付或项目收益'],
      currentState: '方案框架、逻辑架构和产品组合已经建立，需求约束、验证证据与交付边界仍在完善中。',
      nextSteps: ['补充具体客户环境和约束条件', '完善容量、授权与兼容性核验', '通过实验记录补充架构与策略验证证据', '完善实施交付物和风险边界'],
      presalesChecks: ['哪些业务问题需要优先解决，哪些只作为后续建设方向？', '每项技术能力如何对应具体问题和验证证据？', '产品之间有哪些身份、网络、日志或运维依赖？', '实施顺序、业务影响和回退条件如何确认？', '方案完成后由谁持续运营，哪些指标需要继续观察？']
    }
  ];

  const vendorComparisons = [
    {
      id: 'sangfor', name: '深信服', code: 'SANGFOR', domains: ['安全', '云计算'],
      positioning: '围绕企业安全运营、访问安全与云基础设施，提供可组合的产品与方案能力。',
      technicalRoute: '从边界安全、身份访问、终端防护和安全运营延伸到超融合基础设施。',
      coreCapabilities: ['边界与访问安全', '终端检测与响应', '安全运营', '超融合基础设施'],
      typicalScenarios: ['希望统一互联网出口与访问安全边界', '需要收敛远程和第三方访问权限', '计划连接终端检测与安全运营流程', '希望同步评估安全与超融合基础设施'],
      strengths: ['安全能力覆盖较完整', '产品间可形成组合方案', '兼顾安全建设与持续运营'],
      limitations: ['具体能力受产品版本与授权范围影响', '容量、高可用和兼容性需按客户环境验证', '跨厂商现网集成边界需提前确认'],
      selectionTips: '当建设目标强调安全能力组合、远程访问控制、终端与运营协同，或希望将安全与超融合纳入同一方案评估时，可以重点考虑；仍需结合现网设备、团队能力和集成边界逐项确认。'
    },
    {
      id: 'huawei', name: '华为', code: 'HUAWEI', domains: ['安全', '网络', '云计算'],
      positioning: '覆盖企业网络、安全与云平台等技术领域，适合从整体基础设施架构进行评估。',
      technicalRoute: '以园区、广域、数据中心网络为基础，结合安全边界与云平台能力形成整体架构。',
      coreCapabilities: ['园区与数据中心网络', '路由与广域连接', '边界安全', '云平台与虚拟化'],
      typicalScenarios: ['以园区、广域或数据中心网络升级为建设主线', '现网需要延续既有网络技术体系', '希望统一评估网络、安全与云平台架构', '项目范围强调基础设施整体规划'],
      strengths: ['网络产品领域覆盖广', '网络、安全与云可纳入统一架构评估', '适合体系化基础设施规划'],
      limitations: ['需要结合现网技术栈确认集成方式', '整体方案复杂度与团队运维能力需要匹配', '具体型号、授权和兼容性需逐项核验'],
      selectionTips: '当客户已有相关网络技术体系，或建设目标以园区、广域、数据中心和云平台的整体规划为主时，可以结合现网延续性重点评估；同时确认方案复杂度、跨域协同和运维能力是否匹配。'
    },
    {
      id: 'h3c', name: 'H3C', code: 'H3C', domains: ['安全', '网络', '云计算'],
      positioning: '覆盖企业网络、安全、云平台与超融合等领域，可作为基础设施综合建设路线进行评估。',
      technicalRoute: '以交换、路由和安全产品承载网络基础，结合云平台与超融合能力扩展数据中心建设。',
      coreCapabilities: ['交换与路由', '网络安全', '云平台', '超融合基础设施'],
      typicalScenarios: ['以园区交换、路由或广域连接为建设重点', '需要同步评估网络安全能力', '数据中心基础设施需要统一规划', '云平台或超融合纳入后续演进路线'],
      strengths: ['网络基础设施产品覆盖较完整', '安全与云能力可参与组合选型', '可围绕园区和数据中心形成建设路径'],
      limitations: ['实际方案需核对具体产品系列与版本', '跨领域组合能力需要结合项目范围验证', '现网兼容、运维工具和团队经验需纳入评估'],
      selectionTips: '当客户重点建设园区网络、广域连接或数据中心基础设施，并希望同步评估安全、云平台或超融合能力时，可以结合既有设备体系和运维经验考虑；具体产品系列与跨域集成方式仍需逐项核验。'
    }
  ];

  const futureVendors = [
    { name: '华为', focus: '网络、安全与云平台', code: 'HW' },
    { name: 'H3C', focus: '网络、云与安全', code: 'H3C' },
    { name: '奇安信', focus: '安全产品与运营', code: 'QAX' },
    { name: '绿盟', focus: '攻防与安全运营', code: 'NS' },
    { name: '天融信', focus: '边界与综合安全', code: 'TOP' }
  ];

  window.itSolutionLab = { technologyDomains, productLabs, futureVendors, labExperiments, solutionCases, vendorComparisons };

  const pageTitles = {
    home: 'IT Solution Lab · 工程师成长实验室',
    technology: '技术地图 · IT Solution Lab',
    products: '产品实验室 · IT Solution Lab',
    comparison: '厂商对比中心 · IT Solution Lab',
    solutions: '解决方案中心 · IT Solution Lab',
    labs: '实验中心 · IT Solution Lab',
    dashboard: '成长能力看板 · IT Solution Lab',
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

  function getTechnologyDisplayStatus(domain) {
    return ({ completed: '已完成', current: '学习中', planned: '未开始' })[domain.status] || domain.statusLabel || '未开始';
  }

  function getProductDisplayStatus(product) {
    return product.status === '模板已建立' ? '学习中' : product.status;
  }

  function getProductEvidenceStatus(product) {
    return product.status === '模板已建立' ? '学习模板已建立' : product.status;
  }

  function getLabDisplayStatus(status) {
    return status === '待记录' ? '未开始' : status;
  }

  function getSolutionPhaseDisplayStatus(status) {
    return ({ '结构已建立': '进行中', '待进一步补充': '未开始' })[status] || status;
  }

  function getArchitectureDisplayLabel(label) {
    return ({ 'Internet / Branch': '互联网 / 分支接入', 'Core Network': '核心网络' })[label] || label;
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

    const homeLabList = document.querySelector('#homeLabList');
    if (homeLabList) {
      homeLabList.innerHTML = labExperiments.length ? labExperiments.slice(0, 3).map(lab => `
        <article>
          <div><small>${lab.direction} · ${lab.type}</small><h3>${lab.name}</h3></div>
          <span class="lab-state ${getLabStatusClass(lab.status)}">${getLabDisplayStatus(lab.status)}</span>
          <button data-experiment-open="${lab.id}">查看详情</button>
        </article>`).join('') : '<p class="home-lab-empty">当前还没有实验记录。</p>';
    }

    const updateList = document.querySelector('#homeUpdateList');
    if (updateList) {
      const featuredProduct = productLabs.find(product => product.id === 'af') || productLabs[0];
      const latestLab = labExperiments[0];
      const latestSolution = solutionCases[0];
      const comparisonCount = vendorComparisons.length;
      const updates = [
        latestLab && { label: '实验中心', title: `${latestLab.name} · ${getLabDisplayStatus(latestLab.status)}`, attribute: `data-experiment-open="${latestLab.id}"` },
        featuredProduct && { label: '产品实验室', title: `${featuredProduct.name} · ${getProductEvidenceStatus(featuredProduct)}`, attribute: `data-product-open="${featuredProduct.id}"` },
        comparisonCount && { label: '厂商对比', title: `已整理 ${comparisonCount} 家厂商的选型分析`, attribute: 'data-route="comparison"' },
        latestSolution && { label: '解决方案', title: `${latestSolution.name} · ${latestSolution.status}`, attribute: `data-solution-open="${latestSolution.id}"` }
      ].filter(Boolean);
      updateList.innerHTML = updates.map(item => `<button ${item.attribute}><span>${item.label}</span><b>${item.title}</b><i>查看</i></button>`).join('');
    }
  }

  function renderTechnologyMap() {
    const stageFlow = document.querySelector('#technologyStageFlow');
    if (stageFlow) {
      const stages = [
        { title: '基础能力', status: 'completed', label: '基础认知已建立' },
        ...technologyDomains.map(domain => ({ title: domain.titleCn, status: domain.status, label: getTechnologyDisplayStatus(domain) }))
      ];
      stageFlow.innerHTML = stages.map((stage, index) => `<li class="${stage.status}"><b>${String(index + 1).padStart(2, '0')}</b><span>${stage.title}<small>${stage.label}</small></span></li>`).join('');
    }
    const grid = document.querySelector('#technologyGrid');
    if (!grid) return;
    grid.innerHTML = technologyDomains.map((domain, index) => {
      const entryAttribute = domain.entryProduct ? `data-product-open="${domain.entryProduct}"` : `data-route="${domain.entryRoute}"`;
      return `
      <article class="technology-card tech-${domain.id} status-${domain.status}" id="technology-domain-${domain.id}" tabindex="-1">
        <div class="tech-card-head"><i>${domain.code}</i><span>${String(index + 1).padStart(2, '0')} / DOMAIN</span><em>${getTechnologyDisplayStatus(domain)}</em></div>
        <small>${domain.title}</small><h2>${domain.titleCn}</h2>
        <p>${domain.summary}</p>
        <div class="domain-status domain-status-text"><span>学习阶段</span><strong>${getTechnologyDisplayStatus(domain)}</strong></div>
        <div class="skill-chips">${domain.skills.map(skill => `<span>${skill}</span>`).join('')}</div>
        <button class="technology-entry" ${entryAttribute}><span>${domain.entryLabel}</span><b>→</b></button>
      </article>`;
    }).join('');
  }

  function getDashboardStats() {
    const completedDomains = technologyDomains.filter(domain => domain.status === 'completed').length;
    const currentDomains = technologyDomains.filter(domain => domain.status === 'current').length;
    const templateProducts = productLabs.filter(product => product.status === '模板已建立').length;
    const completedLabs = labExperiments.filter(lab => lab.status === '已完成').length;
    const activeLabs = labExperiments.filter(lab => lab.status === '进行中').length;
    const architectureSolutions = solutionCases.filter(solution => solution.architectureReady).length;
    const completedSolutions = solutionCases.filter(solution => solution.status === '已完成').length;
    const vendorDomains = new Set(vendorComparisons.flatMap(vendor => vendor.domains));
    return { completedDomains, currentDomains, templateProducts, completedLabs, activeLabs, architectureSolutions, completedSolutions, vendorDomains };
  }

  function dashboardRouteAttribute(route) {
    return route ? `data-route="${route}"` : '';
  }

  function renderDashboard() {
    const stats = getDashboardStats();
    const capabilityGrid = document.querySelector('#dashboardCapabilityGrid');
    const technologyGrid = document.querySelector('#dashboardTechnologyGrid');
    const progressGrid = document.querySelector('#dashboardProgressGrid');
    const nextList = document.querySelector('#dashboardNextList');
    const evidenceChain = document.querySelector('#dashboardEvidenceChain');
    if (!capabilityGrid || !technologyGrid || !progressGrid || !nextList || !evidenceChain) return;

    const capabilities = [
      { code: '01', title: '技术能力', value: `${stats.completedDomains}/${technologyDomains.length}`, detail: `${stats.currentDomains} 个方向正在学习`, evidence: '技术地图', route: 'technology' },
      { code: '02', title: '产品能力', value: productLabs.length, detail: `${stats.templateProducts} 个模板已建立`, evidence: '产品实验室', route: 'products' },
      { code: '03', title: '实验能力', value: labExperiments.length, detail: `${stats.activeLabs} 个实验进行中`, evidence: '实验记录', route: 'labs' },
      { code: '04', title: '方案能力', value: solutionCases.length, detail: `${stats.architectureSolutions} 个方案已建立架构`, evidence: '方案模板', route: 'solutions' },
      { code: '05', title: '选型能力', value: vendorComparisons.length, detail: `${stats.vendorDomains.size} 个产品领域已分析`, evidence: '厂商对比', route: 'comparison' }
    ];
    capabilityGrid.innerHTML = capabilities.map(item => `
      <article class="dashboard-capability-card">
        <div><span>${item.code}</span><small>${item.evidence}</small></div>
        <h3>${item.title}</h3><b>${item.value}</b><p>${item.detail}</p>
        <button ${dashboardRouteAttribute(item.route)}>查看已有证据 <b>→</b></button>
      </article>`).join('');

    technologyGrid.innerHTML = technologyDomains.map(domain => {
      const entryAttribute = domain.entryProduct ? `data-product-open="${domain.entryProduct}"` : dashboardRouteAttribute(domain.entryRoute);
      return `
        <article class="dashboard-technology-card status-${domain.status}">
          <div class="dashboard-technology-head"><i>${domain.code}</i><div><small>${domain.title}</small><h3>${domain.titleCn}</h3></div><em>${getTechnologyDisplayStatus(domain)}</em></div>
          <p>${domain.summary}</p>
          <div class="dashboard-technology-progress dashboard-technology-stage"><span>学习阶段</span><strong>${getTechnologyDisplayStatus(domain)}</strong></div>
          <div class="dashboard-skill-list">${domain.skills.map(skill => `<span>${skill}</span>`).join('')}</div>
          <button class="dashboard-technology-entry" ${entryAttribute}>进入相关模块 <b>→</b></button>
        </article>`;
    }).join('');

    const progress = [
      { code: 'P', title: '产品学习', value: productLabs.length, detail: `${stats.templateProducts} 个模板已建立`, route: 'products' },
      { code: 'L', title: '实验记录', value: labExperiments.length, detail: `${stats.completedLabs} 个实验已完成`, route: 'labs' },
      { code: 'S', title: '方案模板', value: solutionCases.length, detail: `${stats.completedSolutions} 个方案已完成`, route: 'solutions' },
      { code: 'V', title: '厂商分析', value: vendorComparisons.length, detail: `${stats.vendorDomains.size} 个领域覆盖`, route: 'comparison' }
    ];
    progressGrid.innerHTML = progress.map(item => `
      <article class="dashboard-progress-card"><div><i>${item.code}</i><span>${item.title}</span></div><b>${item.value}</b><p>${item.detail}</p><button ${dashboardRouteAttribute(item.route)}>查看记录 <b>→</b></button></article>`).join('');

    const currentDomain = technologyDomains.find(domain => domain.status === 'current') || technologyDomains.find(domain => domain.status === 'planned') || technologyDomains[0];
    const activeLab = labExperiments.find(lab => lab.status !== '已完成');
    const improvingSolution = solutionCases.find(solution => solution.status !== '已完成');
    const suggestions = [
      currentDomain && { label: '继续技术学习', title: `完善${currentDomain.titleCn}方向`, detail: `当前状态：${getTechnologyDisplayStatus(currentDomain)}`, route: 'technology' },
      activeLab && { label: '补齐实验证据', title: `完成“${activeLab.name}”的验证记录`, detail: `当前阶段：${activeLab.stage}`, route: 'labs' },
      improvingSolution && { label: '沉淀方案证据', title: `完善“${improvingSolution.name}”`, detail: `当前阶段：${improvingSolution.stage}`, route: 'solutions' }
    ].filter(Boolean);
    nextList.innerHTML = suggestions.map((item, index) => `
      <article class="dashboard-next-item"><span>${String(index + 1).padStart(2, '0')}</span><div><small>${item.label}</small><h3>${item.title}</h3><p>${item.detail}</p></div><button ${dashboardRouteAttribute(item.route)} aria-label="${item.title}">进入 <b>→</b></button></article>`).join('');

    const evidence = [
      { code: '01', title: '技术能力', detail: `${stats.completedDomains} 个方向已完成阶段，${stats.currentDomains} 个方向正在学习`, route: 'technology', label: '技术地图' },
      { code: '02', title: '产品能力', detail: `${productLabs.length} 个产品模板，其中 ${stats.templateProducts} 个已建立模板`, route: 'products', label: '产品实验室' },
      { code: '03', title: '实验能力', detail: `${labExperiments.length} 条实验记录，${stats.completedLabs} 个已完成`, route: 'labs', label: '实验中心' },
      { code: '04', title: '方案能力', detail: `${solutionCases.length} 个方案模板，${stats.architectureSolutions} 个已建立架构`, route: 'solutions', label: '解决方案中心' },
      { code: '05', title: '选型能力', detail: `${vendorComparisons.length} 家厂商分析，覆盖 ${stats.vendorDomains.size} 个产品领域`, route: 'comparison', label: '厂商对比' }
    ];
    evidenceChain.innerHTML = evidence.map(item => `
      <li><div class="dashboard-evidence-index"><span>${item.code}</span><i></i></div><div class="dashboard-evidence-copy"><small>${item.label}</small><h3>${item.title}</h3><p>${item.detail}</p></div><button ${dashboardRouteAttribute(item.route)}>查看 <b>→</b></button></li>`).join('');
  }

  const vendorComparisonFilterState = { vendor: '全部', domain: '全部' };

  function renderVendorComparisonFilters() {
    const vendorFilters = document.querySelector('#comparisonVendorFilters');
    const domainFilters = document.querySelector('#comparisonDomainFilters');
    if (!vendorFilters || !domainFilters) return;
    const vendors = ['全部', ...vendorComparisons.map(vendor => vendor.name)];
    const domains = ['全部', ...new Set(vendorComparisons.flatMap(vendor => vendor.domains))];
    vendorFilters.innerHTML = vendors.map(vendor => `<button class="${vendor === vendorComparisonFilterState.vendor ? 'active' : ''}" data-comparison-vendor="${vendor}" aria-pressed="${vendor === vendorComparisonFilterState.vendor}">${vendor}</button>`).join('');
    domainFilters.innerHTML = domains.map(domain => `<button class="${domain === vendorComparisonFilterState.domain ? 'active' : ''}" data-comparison-domain="${domain}" aria-pressed="${domain === vendorComparisonFilterState.domain}">${domain}</button>`).join('');
  }

  function vendorComparisonList(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  function renderVendorComparisonMatrix() {
    const matrix = document.querySelector('#vendorComparisonMatrix');
    const resultCount = document.querySelector('#comparisonResultCount');
    if (!matrix) return;
    const vendors = vendorComparisons.filter(vendor => {
      const matchesVendor = vendorComparisonFilterState.vendor === '全部' || vendor.name === vendorComparisonFilterState.vendor;
      const matchesDomain = vendorComparisonFilterState.domain === '全部' || vendor.domains.includes(vendorComparisonFilterState.domain);
      return matchesVendor && matchesDomain;
    });
    if (resultCount) resultCount.textContent = `当前展示 ${vendors.length} 家厂商`;
    if (!vendors.length) {
      matrix.style.removeProperty('--vendor-count');
      matrix.innerHTML = '<div class="vendor-comparison-empty"><b>暂无匹配内容</b><p>当前厂商与产品领域组合暂无可用的对比资料。</p></div>';
      return;
    }
    const rows = [
      { label: '厂商定位', key: 'positioning' },
      { label: '技术路线', key: 'technicalRoute' },
      { label: '核心能力', key: 'coreCapabilities', list: true },
      { label: '典型场景', key: 'typicalScenarios', list: true },
      { label: '优势方向', key: 'strengths', list: true },
      { label: '需要注意', key: 'limitations', list: true },
      { label: '选型考虑', key: 'selectionTips', selection: true }
    ];
    matrix.style.setProperty('--vendor-count', vendors.length);
    matrix.innerHTML = `
      <div class="vendor-comparison-matrix-grid">
        <div class="vendor-matrix-corner"><span>比较维度</span><small>OBJECTIVE VIEW</small></div>
        ${vendors.map(vendor => `<div class="vendor-matrix-head"><span>${vendor.code}</span><h3>${vendor.name}</h3><div>${vendor.domains.map(domain => `<em>${domain}</em>`).join('')}</div></div>`).join('')}
        ${rows.map(row => `
          <div class="vendor-matrix-label">${row.label}</div>
          ${vendors.map(vendor => `<div class="vendor-matrix-cell${row.selection ? ' is-selection' : ''}">${row.list ? vendorComparisonList(vendor[row.key]) : `<p>${vendor[row.key]}</p>`}</div>`).join('')}
        `).join('')}
      </div>`;
  }

  function renderVendorComparisonCenter() {
    renderVendorComparisonFilters();
    renderVendorComparisonMatrix();
  }

  document.addEventListener('click', event => {
    const focusButton = event.target.closest('[data-tech-focus]');
    if (!focusButton) return;
    const target = document.querySelector(`#technology-domain-${focusButton.dataset.techFocus}`);
    if (!target) return;
    document.querySelectorAll('.technology-card.focused').forEach(card => card.classList.remove('focused'));
    target.classList.add('focused');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.focus({ preventScroll: true });
  });

  const labFilterState = { direction: '全部', status: '全部' };

  function getLabStatusClass(status) {
    return ({ '进行中': 'active', '待记录': 'pending', '模板已建立': 'ready', '已完成': 'completed' })[status] || 'neutral';
  }

  function renderLabStats() {
    const stats = document.querySelector('#labsStats');
    if (!stats) return;
    const values = [
      [labExperiments.length, '实验总数'],
      [labExperiments.filter(lab => lab.status === '进行中').length, '进行中'],
      [labExperiments.filter(lab => lab.templateReady).length, '已建立模板'],
      [labExperiments.filter(lab => lab.status === '已完成').length, '已完成']
    ];
    stats.innerHTML = values.map(([value, label]) => `<div><b>${value}</b><span>${label}</span></div>`).join('');
  }

  function renderLabFilters() {
    const directionFilters = document.querySelector('#labDirectionFilters');
    const statusFilters = document.querySelector('#labStatusFilters');
    if (!directionFilters || !statusFilters) return;
    const directions = ['全部', ...new Set(labExperiments.map(lab => lab.direction))];
    const statuses = ['全部', ...new Set(labExperiments.map(lab => lab.status))];
    directionFilters.innerHTML = directions.map(value => `<button class="${value === labFilterState.direction ? 'active' : ''}" data-experiment-direction="${value}" aria-pressed="${value === labFilterState.direction}">${value}</button>`).join('');
    statusFilters.innerHTML = statuses.map(value => `<button class="${value === labFilterState.status ? 'active' : ''}" data-experiment-status="${value}" aria-pressed="${value === labFilterState.status}">${value}</button>`).join('');
  }

  function renderLabExperiments() {
    const grid = document.querySelector('#labsGrid');
    if (!grid) return;
    const filteredLabs = labExperiments.filter(lab => {
      const matchesDirection = labFilterState.direction === '全部' || lab.direction === labFilterState.direction;
      const matchesStatus = labFilterState.status === '全部' || lab.status === labFilterState.status;
      return matchesDirection && matchesStatus;
    });
    const resultCount = document.querySelector('#labResultCount');
    if (resultCount) resultCount.textContent = `共 ${filteredLabs.length} 个实验`;
    if (!filteredLabs.length) {
      grid.innerHTML = '<div class="labs-empty-state"><b>暂无匹配实验</b><p>当前筛选条件下暂未整理实验内容。</p></div>';
      return;
    }
    grid.innerHTML = filteredLabs.map((lab, index) => `
      <article class="experiment-card">
        <div class="experiment-card-index"><span>${String(index + 1).padStart(2, '0')} / LAB</span><em class="status-${getLabStatusClass(lab.status)}">${getLabDisplayStatus(lab.status)}</em></div>
        <div class="experiment-card-copy"><div class="experiment-meta"><span>${lab.direction}</span><i>${lab.type}</i></div><h3>${lab.name}</h3><p>${lab.summary}</p></div>
        <div class="experiment-card-action"><small>当前阶段</small><strong>${lab.stage}</strong><button data-experiment-open="${lab.id}">查看实验详情 <b>→</b></button></div>
      </article>`).join('');
  }

  function labTopologyTemplate() {
    return `
      <div class="topology-canvas">
        <div class="topo-node cloud"><i>WAN</i><b>互联网</b><small>203.0.113.0/24</small></div><span class="topo-line"><em>非信任区</em></span>
        <div class="topo-node firewall"><i>AF</i><b>防火墙</b><small>NAT · 策略 · 日志</small></div><span class="topo-line"><em>信任区</em></span>
        <div class="topo-node switch"><i>SW</i><b>核心交换</b><small>VLAN 10 / 20</small></div><span class="topo-line split-line"><em>局域网</em></span>
        <div class="topo-branches"><div class="topo-node small"><i>PC</i><b>测试终端</b></div><div class="topo-node small"><i>SRV</i><b>业务服务器</b></div></div>
      </div>`;
  }

  function labExperimentTemplate(lab) {
    const environment = lab.environment.map(item => `<span>${item}</span>`).join('');
    const skills = lab.skills.map(item => `<span>${item}</span>`).join('');
    const configuration = lab.configuration.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span>${item}</span></li>`).join('');
    const tests = lab.tests.map(item => `<article><div><span>${item.name}</span><b class="status-${getLabStatusClass(item.status)}">${getLabDisplayStatus(item.status)}</b></div><p>${item.check}</p><small>预期观察 · ${item.evidence}</small></article>`).join('');
    return `
      <div class="experiment-dialog-head"><span>${lab.direction} / ${lab.type}</span><div><h2>${lab.name}</h2><em class="status-${getLabStatusClass(lab.status)}">${getLabDisplayStatus(lab.status)}</em></div><p>${lab.summary}</p><small>当前阶段 · ${lab.stage}</small></div>
      <section class="experiment-overview"><article><span>01 / 实验背景</span><h3>为什么进行这个实验？</h3><p>${lab.background}</p></article><article><span>02 / 实验目标</span><h3>需要验证什么？</h3><p>${lab.objective}</p></article></section>
      <section class="experiment-environment"><div class="experiment-section-title"><span>03 / 拓扑与环境</span><h3>建立可复现的实验边界</h3><p class="experiment-topology-note">${lab.topologyDescription}</p></div><div class="experiment-environment-meta"><div><small>实验环境</small>${environment}</div><div><small>关联技能</small>${skills}</div></div><div class="experiment-topology"><div class="board-head"><span>LAB TOPOLOGY</span><b>ENV / 001</b></div>${labTopologyTemplate()}</div></section>
      <div class="experiment-detail-grid"><section><div class="experiment-section-title"><span>04 / 配置步骤</span><h3>按顺序记录实施过程</h3></div><ol class="experiment-steps">${configuration}</ol></section><section><div class="experiment-section-title"><span>05 / 验证结果</span><h3>当前验证记录</h3></div><div class="experiment-tests">${tests}</div></section></div>
      <section class="experiment-review"><div class="experiment-section-title"><span>06 / 问题与复盘</span><h3>从结果沉淀排障方法</h3></div><p>${lab.review}</p><small>${lab.templateReady ? '实验记录模板已建立' : '实验记录模板待建立'}</small></section>`;
  }

  const labExperimentDialog = document.querySelector('#labExperimentDialog');
  const labExperimentBody = document.querySelector('#labExperimentBody');

  function openLabExperiment(id) {
    const lab = labExperiments.find(item => item.id === id);
    if (!lab || !labExperimentDialog || !labExperimentBody) return;
    labExperimentBody.innerHTML = labExperimentTemplate(lab);
    labExperimentDialog.showModal();
  }

  function renderLabCenter() {
    renderLabStats();
    renderLabFilters();
    renderLabExperiments();
  }

  const solutionFilterState = { scenario: '全部', status: '全部' };

  function getSolutionStatusClass(status) {
    return ({ '需求梳理中': 'discovery', '架构已建立': 'architecture', '正在完善': 'improving', '已完成': 'completed' })[status] || 'neutral';
  }

  function getProductById(id) {
    return productLabs.find(product => product.id === id);
  }

  function renderSolutionStats() {
    const stats = document.querySelector('#solutionsStats');
    if (!stats) return;
    const values = [
      [solutionCases.length, '方案总数'],
      [solutionCases.filter(solution => solution.status === '正在完善').length, '正在完善'],
      [solutionCases.filter(solution => solution.architectureReady).length, '已建立架构'],
      [solutionCases.filter(solution => solution.status === '已完成').length, '已完成']
    ];
    stats.innerHTML = values.map(([value, label]) => `<div><b>${value}</b><span>${label}</span></div>`).join('');
  }

  function renderSolutionFilters() {
    const scenarioFilters = document.querySelector('#solutionScenarioFilters');
    const statusFilters = document.querySelector('#solutionStatusFilters');
    if (!scenarioFilters || !statusFilters) return;
    const scenarios = ['全部', ...new Set(solutionCases.map(solution => solution.scenario))];
    const statuses = ['全部', ...new Set(solutionCases.map(solution => solution.status))];
    scenarioFilters.innerHTML = scenarios.map(value => `<button class="${value === solutionFilterState.scenario ? 'active' : ''}" data-solution-scenario="${value}" aria-pressed="${value === solutionFilterState.scenario}">${value}</button>`).join('');
    statusFilters.innerHTML = statuses.map(value => `<button class="${value === solutionFilterState.status ? 'active' : ''}" data-solution-status="${value}" aria-pressed="${value === solutionFilterState.status}">${value}</button>`).join('');
  }

  function renderSolutionCases() {
    const grid = document.querySelector('#solutionsGrid');
    if (!grid) return;
    const filteredSolutions = solutionCases.filter(solution => {
      const matchesScenario = solutionFilterState.scenario === '全部' || solution.scenario === solutionFilterState.scenario;
      const matchesStatus = solutionFilterState.status === '全部' || solution.status === solutionFilterState.status;
      return matchesScenario && matchesStatus;
    });
    const resultCount = document.querySelector('#solutionResultCount');
    if (resultCount) resultCount.textContent = `共 ${filteredSolutions.length} 个方案`;
    if (!filteredSolutions.length) {
      grid.innerHTML = '<div class="solutions-empty-state"><b>暂无匹配方案</b><p>当前筛选条件下暂未整理方案内容。</p></div>';
      return;
    }
    grid.innerHTML = filteredSolutions.map((solution, index) => `
      <article class="solution-list-card">
        <div class="solution-list-index"><span>${String(index + 1).padStart(2, '0')} / SOLUTION</span><em class="status-${getSolutionStatusClass(solution.status)}">${solution.status}</em></div>
        <div class="solution-list-copy"><div class="solution-list-meta"><span>${solution.scenario}</span><i>${solution.templateType}</i></div><h3>${solution.name}</h3><p>${solution.summary}</p><small>适用对象 · ${solution.audience}</small></div>
        <div class="solution-list-action"><small>当前阶段</small><strong>${solution.stage}</strong><div>${solution.domains.map(domain => `<span>${domain}</span>`).join('')}</div><button data-solution-open="${solution.id}">查看方案详情 <b>→</b></button></div>
      </article>`).join('');
  }

  function solutionArchitectureTemplate(solution) {
    const security = solution.architecture.securityProducts.map(id => getProductById(id)?.name || '产品信息待补充').join(' + ');
    const services = solution.architecture.serviceProducts.map(id => {
      const product = getProductById(id);
      return `<div class="solution-arch-node"><small>${product?.category || '能力待补充'}</small><b>${product?.name || '产品信息待补充'}</b></div>`;
    }).join('');
    return `
      <div class="solution-architecture-flow">
        <div class="solution-arch-node"><small>外部接入</small><b>${getArchitectureDisplayLabel(solution.architecture.ingress)}</b></div><i></i>
        <div class="solution-arch-node security"><small>安全边界</small><b>${security}</b></div><i></i>
        <div class="solution-arch-node core"><small>业务核心</small><b>${getArchitectureDisplayLabel(solution.architecture.core)}</b></div><i></i>
        <div class="solution-arch-branches">${services}</div>
      </div>`;
  }

  function solutionProductsTemplate(solution) {
    return solution.productReferences.map(reference => {
      const product = getProductById(reference.id);
      if (!product) {
        return `<article class="solution-product-reference missing"><div><span>产品信息待补充</span><small>${reference.id}</small></div><p>${reference.reason || '该产品在方案中的使用原因待进一步补充。'}</p><em>${reference.problem || '问题类型待补充'}</em></article>`;
      }
      return `<article class="solution-product-reference"><div><span>${product.name}</span><small>${product.fullName} · ${product.category}</small></div><p>${reference.reason}</p><footer><em>客户问题 · ${reference.problem}</em><span>技术能力 · ${reference.capability || '待进一步补充'}</span></footer></article>`;
    }).join('');
  }

  function solutionDetailTemplate(solution) {
    const problems = solution.problems.map(item => `<li>${item}</li>`).join('');
    const objectives = solution.objectives.map(item => `<li>${item}</li>`).join('');
    const constraints = solution.constraints.map(item => `<li>${item}</li>`).join('');
    const phases = solution.phases.map((phase, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><div><strong>${phase.name}</strong><p>${phase.objective}</p><span>${getSolutionPhaseDisplayStatus(phase.status)}</span><small>主要交付物 · ${phase.deliverable}</small></div></li>`).join('');
    const risks = solution.risks.map(item => `<li>${item}</li>`).join('');
    const nextSteps = solution.nextSteps.map(item => `<li>${item}</li>`).join('');
    const presalesChecks = solution.presalesChecks.map(item => `<li>${item}</li>`).join('');
    return `
      <div class="solution-dialog-head"><span>${solution.scenario} / ${solution.templateType}</span><div><h2>${solution.name}</h2><em class="status-${getSolutionStatusClass(solution.status)}">${solution.status}</em></div><p>${solution.summary}</p><small>${solution.audience} · 当前阶段 ${solution.stage}</small><strong>尚未形成真实客户交付结果</strong></div>
      <section class="solution-detail-overview"><article><span>01 / 客户背景</span><h3>当前场景</h3><p>${solution.background}</p></article><article><span>02 / 当前问题</span><h3>需要解决什么？</h3><ul>${problems}</ul></article></section>
      <section class="solution-goals-constraints"><article><span>03 / 建设目标</span><h3>方案希望形成的能力</h3><ul>${objectives}</ul></article><article><span>04 / 需求与约束</span><h3>仍需确认的边界</h3><ul>${constraints}</ul></article></section>
      <section class="solution-architecture-section"><div class="solution-detail-title"><span>05 / 总体架构</span><h3>从接入、安全边界到业务与基础设施</h3></div><div class="solution-architecture-board"><div class="board-head"><span>SOLUTION ARCHITECTURE</span><b>LOGICAL VIEW</b></div>${solutionArchitectureTemplate(solution)}</div></section>
      <section class="solution-products-section"><div class="solution-detail-title"><span>06 / 产品与能力组合</span><h3>产品选择必须对应客户问题</h3></div><div class="solution-product-references">${solutionProductsTemplate(solution)}</div></section>
      <section class="solution-phases-section"><div class="solution-detail-title"><span>07 / 建设阶段</span><h3>按顺序推进，不虚构项目日期</h3></div><ol class="solution-phase-list">${phases}</ol></section>
      <section class="solution-risks-section"><div class="solution-detail-title"><span>08 / 风险与边界</span><h3>当前方案不代表完成交付</h3></div><ul>${risks}</ul></section>
      <section class="solution-state-section"><article><span>09 / 当前完成状态</span><h3>${solution.status}</h3><p>${solution.currentState}</p></article><article><span>10 / 后续完善方向</span><h3>下一步工作</h3><ol>${nextSteps}</ol><div class="solution-presales-check"><small>售前检查</small><ul>${presalesChecks}</ul></div></article></section>`;
  }

  const solutionDialog = document.querySelector('#solutionDialog');
  const solutionBody = document.querySelector('#solutionBody');

  function openSolution(id) {
    const solution = solutionCases.find(item => item.id === id);
    if (!solution || !solutionDialog || !solutionBody) return;
    solutionBody.innerHTML = solutionDetailTemplate(solution);
    solutionDialog.showModal();
  }

  function renderSolutionsCenter() {
    renderSolutionStats();
    renderSolutionFilters();
    renderSolutionCases();
  }

  const productFilterState = { vendor: '全部', category: '全部' };

  function getProductGroup(product) {
    if (product.category === '云基础设施') return '云计算与数据中心';
    if (['身份与访问', '终端安全'].includes(product.category)) return '终端与访问安全';
    return '网络安全';
  }

  function renderProductLabs() {
    const productCount = document.querySelector('#productStatCount');
    const vendorCount = document.querySelector('#productStatVendors');
    const categoryCount = document.querySelector('#productStatCategories');
    if (productCount) productCount.textContent = productLabs.length;
    if (vendorCount) vendorCount.textContent = new Set(productLabs.map(product => product.vendor)).size;
    if (categoryCount) categoryCount.textContent = new Set(productLabs.map(getProductGroup)).size;
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
        <div class="product-progress product-state"><span>${getProductDisplayStatus(product)} · ${getProductEvidenceStatus(product)}</span></div>
        <button data-product-open="${product.id}">进入产品实验室 <b>→</b></button>
      </article>`).join('');
  }

  function productTemplate(product) {
    const hasContent = product.modules.length > 0;
    const customerProblems = product.customerProblems?.length ? `<div class="dialog-customer-problems"><small>客户为什么需要该产品</small><ul>${product.customerProblems.map(item => `<li>${item}</li>`).join('')}</ul></div>` : '';
    const moduleMarkup = hasContent ? product.modules.map(module => `<article><span>${module.title}</span><div>${module.items.map(item => `<b>${item}</b>`).join('')}</div></article>`).join('') : '<div class="template-empty">模块清单待学习后补充</div>';
    const workflowMarkup = hasContent ? product.workflow.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span><small>STEP ${index + 1}</small>${item}</span></li>`).join('') : '<li class="empty-step">配置流程模板已就绪</li>';
    const troubleMarkup = hasContent ? product.troubleshooting.map(item => `<li>${item}</li>`).join('') : '<li>常见问题与排查思路待补充</li>';
    const presalesMarkup = hasContent ? product.presales.map(item => `<li>${item}</li>`).join('') : '<li>客户需求、适用场景与选型问题待补充</li>';
    return `
      <div class="lab-dialog-head"><span>${product.vendor} / PRODUCT LAB</span><div class="dialog-title"><i>${product.name}</i><div><h2>${product.fullName}</h2><p>${getProductGroup(product)} · ${product.category}</p></div></div><div class="dialog-progress product-state"><span>${getProductDisplayStatus(product)}</span><em>${getProductEvidenceStatus(product)}</em></div></div>
      <section class="dialog-positioning"><span>01 / 产品定位与客户问题</span><h3>解决什么问题？适合什么场景？</h3><p>${product.positioning}</p>${customerProblems}</section>
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
    const solutionButton = event.target.closest('[data-solution-open]');
    if (solutionButton) openSolution(solutionButton.dataset.solutionOpen);
    const solutionScenarioButton = event.target.closest('[data-solution-scenario]');
    if (solutionScenarioButton) {
      solutionFilterState.scenario = solutionScenarioButton.dataset.solutionScenario;
      document.querySelectorAll('[data-solution-scenario]').forEach(button => {
        const active = button === solutionScenarioButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderSolutionCases();
    }
    const solutionStatusButton = event.target.closest('[data-solution-status]');
    if (solutionStatusButton) {
      solutionFilterState.status = solutionStatusButton.dataset.solutionStatus;
      document.querySelectorAll('[data-solution-status]').forEach(button => {
        const active = button === solutionStatusButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderSolutionCases();
    }
    const experimentButton = event.target.closest('[data-experiment-open]');
    if (experimentButton) openLabExperiment(experimentButton.dataset.experimentOpen);
    const directionButton = event.target.closest('[data-experiment-direction]');
    if (directionButton) {
      labFilterState.direction = directionButton.dataset.experimentDirection;
      document.querySelectorAll('[data-experiment-direction]').forEach(button => {
        const active = button === directionButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderLabExperiments();
    }
    const statusButton = event.target.closest('[data-experiment-status]');
    if (statusButton) {
      labFilterState.status = statusButton.dataset.experimentStatus;
      document.querySelectorAll('[data-experiment-status]').forEach(button => {
        const active = button === statusButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderLabExperiments();
    }
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
    const comparisonVendorButton = event.target.closest('[data-comparison-vendor]');
    if (comparisonVendorButton) {
      vendorComparisonFilterState.vendor = comparisonVendorButton.dataset.comparisonVendor;
      document.querySelectorAll('[data-comparison-vendor]').forEach(button => {
        const active = button === comparisonVendorButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderVendorComparisonMatrix();
    }
    const comparisonDomainButton = event.target.closest('[data-comparison-domain]');
    if (comparisonDomainButton) {
      vendorComparisonFilterState.domain = comparisonDomainButton.dataset.comparisonDomain;
      document.querySelectorAll('[data-comparison-domain]').forEach(button => {
        const active = button === comparisonDomainButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderVendorComparisonMatrix();
    }
  });

  document.querySelector('[data-lab-close]')?.addEventListener('click', () => productDialog?.close());
  productDialog?.addEventListener('click', event => { if (event.target === productDialog) productDialog.close(); });
  document.querySelector('[data-solution-close]')?.addEventListener('click', () => solutionDialog?.close());
  solutionDialog?.addEventListener('click', event => { if (event.target === solutionDialog) solutionDialog.close(); });
  document.querySelector('[data-experiment-close]')?.addEventListener('click', () => labExperimentDialog?.close());
  labExperimentDialog?.addEventListener('click', event => { if (event.target === labExperimentDialog) labExperimentDialog.close(); });

  renderHomeContent();
  renderTechnologyMap();
  renderDashboard();
  renderVendorComparisonCenter();
  renderSolutionsCenter();
  renderLabCenter();
  renderProductLabs();
  showPage(location.hash.slice(1) || 'home', { updateHash: false, scroll: false, instant: true });
})();

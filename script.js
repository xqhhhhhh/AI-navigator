// AI工具数据
const aiTools = [
    {
        name: "ChatGPT",
        description: "OpenAI开发的强大对话AI，支持多种语言和任务",
        url: "https://chat.openai.com",
        icon: "fas fa-comments",
        color: "#10a37f",
        category: "chat",
        tags: ["对话", "写作", "翻译"]
    },
    {
        name: "Claude",
        description: "Anthropic开发的AI助手，擅长写作和分析",
        url: "https://claude.ai",
        icon: "fas fa-brain",
        color: "#d97706",
        category: "chat",
        tags: ["写作", "分析", "研究"]
    },
    {
        name: "Gemini",
        description: "Google的多模态AI，支持文本、图像和代码",
        url: "https://gemini.google.com",
        icon: "fas fa-gem",
        color: "#4285f4",
        category: "chat",
        tags: ["多模态", "图像", "代码"]
    },
    {
        name: "DeepSeek",
        description: "深度求索开发的AI助手，擅长代码生成和数学推理",
        url: "https://chat.deepseek.com",
        icon: "fas fa-search",
        color: "#6366f1",
        category: "chat",
        tags: ["代码生成", "数学", "推理"]
    },
    {
        name: "文心一言",
        description: "百度开发的AI对话工具，中文理解能力强",
        url: "https://yiyan.baidu.com",
        icon: "fas fa-language",
        color: "#1890ff",
        category: "chat",
        tags: ["中文", "对话", "创作"]
    },
    {
        name: "通义千问",
        description: "阿里云的大语言模型，支持多种AI任务",
        url: "https://qianwen.aliyun.com",
        icon: "fas fa-cloud",
        color: "#ff6b35",
        category: "chat",
        tags: ["对话", "创作", "分析"]
    },
    {
        name: "讯飞星火",
        description: "科大讯飞的认知大模型，中文理解优秀",
        url: "https://xinghuo.xfyun.cn",
        icon: "fas fa-fire",
        color: "#ff4d4f",
        category: "chat",
        tags: ["中文", "认知", "对话"]
    },
    {
        name: "Midjourney",
        description: "强大的AI图像生成工具，艺术风格丰富",
        url: "https://www.midjourney.com",
        icon: "fas fa-palette",
        color: "#8b5cf6",
        category: "image",
        tags: ["图像生成", "艺术", "设计"]
    },
    {
        name: "DALL-E",
        description: "OpenAI的图像生成AI，创意无限",
        url: "https://openai.com/dall-e-2",
        icon: "fas fa-image",
        color: "#10a37f",
        category: "image",
        tags: ["图像生成", "创意", "艺术"]
    },
    {
        name: "Stable Diffusion",
        description: "开源的图像生成模型，可本地部署",
        url: "https://stability.ai",
        icon: "fas fa-magic",
        color: "#6366f1",
        category: "image",
        tags: ["开源", "图像生成", "本地部署"]
    },
    {
        name: "GitHub Copilot",
        description: "AI编程助手，实时代码建议和补全",
        url: "https://github.com/features/copilot",
        icon: "fab fa-github",
        color: "#333",
        category: "code",
        tags: ["编程", "代码补全", "开发"]
    },
    {
        name: "Cursor",
        description: "AI驱动的代码编辑器，智能编程体验",
        url: "https://cursor.sh",
        icon: "fas fa-code",
        color: "#00d4aa",
        category: "code",
        tags: ["编辑器", "AI编程", "开发"]
    },
    {
        name: "Notion AI",
        description: "集成在Notion中的AI助手，提升工作效率",
        url: "https://www.notion.so",
        icon: "fas fa-sticky-note",
        color: "#000",
        category: "writing",
        tags: ["写作", "笔记", "协作"]
    },
    {
        name: "Jasper",
        description: "专业的AI写作助手，适合营销和内容创作",
        url: "https://www.jasper.ai",
        icon: "fas fa-pen-fancy",
        color: "#ff6b6b",
        category: "writing",
        tags: ["写作", "营销", "内容"]
    },
    {
        name: "Copy.ai",
        description: "AI文案生成工具，快速创建营销内容",
        url: "https://www.copy.ai",
        icon: "fas fa-copy",
        color: "#ff6b35",
        category: "writing",
        tags: ["文案", "营销", "内容生成"]
    },
    {
        name: "Perplexity",
        description: "AI搜索引擎，提供准确的信息和答案",
        url: "https://www.perplexity.ai",
        icon: "fas fa-search",
        color: "#6366f1",
        category: "chat",
        tags: ["搜索", "问答", "研究"]
    },
    {
        name: "Pi",
        description: "Inflection AI开发的个人AI助手",
        url: "https://pi.ai",
        icon: "fas fa-user-friends",
        color: "#ff6b6b",
        category: "chat",
        tags: ["个人助手", "对话", "陪伴"]
    }
];

// 当前选中的分类
let currentCategory = 'all';
let filteredTools = [...aiTools];

// 初始化页面
function initPage() {
    renderTools();
    setupEventListeners();
}

// 渲染工具卡片
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = '';

    filteredTools.forEach(tool => {
        const card = createToolCard(tool);
        grid.appendChild(card);
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.onclick = () => window.open(tool.url, '_blank');

    card.innerHTML = `
        <div class="tool-icon" style="background-color: ${tool.color}">
            <i class="${tool.icon}"></i>
        </div>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-description">${tool.description}</div>
        <div class="tool-tags">
            ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
        </div>
    `;

    return card;
}

// 设置事件监听器
function setupEventListeners() {
    // 分类按钮
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            currentCategory = e.target.dataset.category;
            filterTools();
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterTools(searchTerm);
    });
}

// 过滤工具
function filterTools(searchTerm = '') {
    filteredTools = aiTools.filter(tool => {
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });

    renderTools();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js');
  });
} 
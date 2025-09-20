import React from 'react';
import { Article, Question, RankedUser, MapQuestion, CategoryRegion, Badge } from './types';

export const HedgehogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M187.5 90C197.5 70 200 47.5 190 30C180 12.5 160 0 135 0C110 0 90 12.5 80 30C70 47.5 72.5 70 82.5 90H12.5C5.5 90 0 95.5 0 102.5V110C0 115.5 4.5 120 10 120H190C195.5 120 200 115.5 200 110V102.5C200 95.5 194.5 90 187.5 90Z" fill="#1F2937"/>
        <path d="M135 15C150 15 162.5 22.5 170 35L150 45L165 60L140 65L155 80L130 80L140 95L110 85L125 70L100 75L115 55L90 60L100 40L80 45L95 30C102.5 20 117.5 15 135 15Z" fill="#E5E7EB"/>
        <circle cx="180" cy="70" r="5" fill="#E5E7EB"/>
    </svg>
);


export const RECENT_ARTICLES: Article[] = [
  { id: 1, title: "はじめてのMarkdownガイド", author: "XTECH LITE", date: "2025/8/13", likes: 2, comments: 2, imageUrl: "https://picsum.photos/seed/tech1/300/200" },
  { id: 2, title: "すごいデザインのヒント", author: "XTECH LITE", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 3, title: "UXケーススタディ：モバイル", author: "開発者S", date: "2025/8/13", likes: 0, comments: 1 },
  { id: 4, title: "スタートアップ資金調達ガイド", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 5, title: "初心者のためのAI", author: "開発者S", date: "2025/8/13", likes: 1, comments: 1 },
  { id: 6, title: "おしゃれなCSSハック", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 7, title: "TypeScriptのデザインパターン", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
];

export const MY_ARTICLES: Article[] = [
  { id: 8, title: "はじめてのMarkdownガイド", author: "XTECH LITE", date: "2025/8/13", likes: 2, comments: 2, imageUrl: "https://picsum.photos/seed/tech1/300/200" },
  { id: 9, title: "すごいデザインのヒント", author: "XTECH LITE", date: "2025/8/13", likes: 0, comments: 0 },
];

export const DRAFTS: Article[] = [
  { id: 10, title: "新しい記事", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 11, title: "新しい記事", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 12, title: "新しい記事", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 13, title: "新しい記事", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
];

export const BADGES: Record<string, Badge> = {
  TOP_EXPERT: { id: 'TOP_EXPERT', name: 'トップエキスパート', description: 'ベストアンサーを10回以上獲得した証です。', icon: '🏆', color: 'text-yellow-400' },
  PROBLEM_SOLVER: { id: 'PROBLEM_SOLVER', name: '問題解決のプロ', description: '15個以上の質問を解決に導きました。', icon: '✅', color: 'text-green-400' },
  PROLIFIC_POSTER: { id: 'PROLIFIC_POSTER', name: '多作な投稿者', description: '20回以上の回答を投稿しました。', icon: '✍️', color: 'text-blue-400' },
  REACT_GURU: { id: 'REACT_GURU', name: 'Reactの達人', description: 'Reactカテゴリーで認められた専門家です。', icon: '⚛️', color: 'text-cyan-400' },
};

export const RANKED_USERS: RankedUser[] = [
    { id: 'user1', name: 'お助けハリネズミ #1', avatar: '🦔', tags: ['React', 'TypeScript', 'Node.js'], answers: 25, solved: 20, bestAnswers: 15, badges: [BADGES.TOP_EXPERT, BADGES.PROBLEM_SOLVER, BADGES.PROLIFIC_POSTER, BADGES.REACT_GURU] },
    { id: 'user2', name: 'コードカメレオン #2', avatar: '🦎', tags: ['Python', 'Django', 'Data Science'], answers: 22, solved: 18, bestAnswers: 10, badges: [BADGES.TOP_EXPERT, BADGES.PROBLEM_SOLVER, BADGES.PROLIFIC_POSTER] },
    { id: 'user3', name: 'シンタックスズメ #3', avatar: '🐦', tags: ['Java', 'Spring', 'SQL'], answers: 18, solved: 15, bestAnswers: 8, badges: [BADGES.PROBLEM_SOLVER] },
    { id: 'user4', name: 'ロジックライオン #4', avatar: '🦁', tags: ['Go', 'C#', '.NET'], answers: 15, solved: 11, bestAnswers: 5, badges: [] },
    { id: 'user5', name: 'デバッグダック #5', avatar: '🦆', tags: ['PHP', 'Laravel', 'Vue'], answers: 12, solved: 9, bestAnswers: 4, badges: [] },
].sort((a, b) => b.bestAnswers - a.bestAnswers);


const BASE_QUESTIONS: Question[] = [
    {
        id: 1,
        title: "CSSでdivを完璧に中央配置する方法は？",
        content: "divを縦横中央に配置するのにずっと苦労しています。margin: auto、flexbox、gridなど色々試しましたが、何かがいつもずれてしまいます。どんな状況でも使える、信頼性が高くてモダンな方法は何でしょうか？",
        tags: ['css', 'flexbox', 'layout'],
        answers: [
            { id: 1, author: RANKED_USERS[0], content: "Flexboxが一番おすすめです！親コンテナに`display: flex`, `justify-content: center`, `align-items: center`を設定するだけ。ほぼ間違いなくうまくいきますよ。", isBestAnswer: true },
            { id: 2, author: RANKED_USERS[2], content: "relativeな親要素内で絶対位置指定を使うなら、`position: absolute`, `top: 50%`, `left: 50%`, `transform: translate(-50%, -50%)`も古典的な良い方法です。", isBestAnswer: false },
        ]
    },
    {
        id: 2,
        title: "Reactの`useEffect`と`useLayoutEffect`の違いは何ですか？",
        content: "どちらのフックも副作用のために使うことは理解していますが、実行タイミングの正確な違いや、どちらをいつ使うべきかが明確ではありません。簡単な例で説明していただけませんか？",
        tags: ['react', 'hooks', 'typescript'],
        answers: [
            { id: 3, author: RANKED_USERS[0], content: "`useEffect`は画面描画後に非同期で実行されますが、`useLayoutEffect`はブラウザが描画する前に同期的に実行されます。DOM要素の測定や、ユーザーにちらつきを見せたくないDOMの変更を行う場合は`useLayoutEffect`を使用します。", isBestAnswer: false },
        ]
    }
];

// Add more questions for a richer map
const ADDITIONAL_QUESTIONS: Omit<Question, 'id' | 'answers'>[] = [
  { title: "GridとFlexbox：どちらを使うべき？", content: "複雑なレイアウトを構築する際、CSS GridとFlexboxのどちらを選ぶべきか、その決定要因は何ですか？", tags: ['css', 'layout', 'grid'] },
  { title: "Reduxで非同期処理をどう扱う？", content: "ReduxアプリケーションでAPI呼び出しのような非同期アクションを管理する標準的な方法は何ですか？thunkやsagaについて聞いたことがあります。", tags: ['react', 'redux', 'async'] },
  { title: "REST APIのエラーハンドリングのベストプラクティスは？", content: "RESTful APIでエラーレスポンスを設計する際のベストプラクティスを教えてください。標準的なHTTPコードを使うべきですか？ボディには何を含めるべきですか？", tags: ['api', 'rest', 'node.js'] },
  { title: "JavaScriptでdebounce関数を実装する方法", content: "検索入力のような非常に頻繁に発火するイベントがあります。関数の呼び出し頻度を制限するために、debounce関数をゼロから実装する方法はありますか？", tags: ['javascript', 'performance'] },
  { title: "TypeScriptのジェネリクスとは？", content: "実践的な例を使ってTypeScriptのジェネリクスを説明していただけませんか？どのようにコードの再利用性を高めるのか理解に苦しんでいます。", tags: ['typescript', 'generics'] },
  { title: "初心者向けSQL 'JOIN' の解説", content: "SQLを始めたばかりで、さまざまな種類のJOIN（INNER, LEFT, RIGHT, FULL）が紛らわしいです。違いを簡単に覚える方法はありますか？", tags: ['sql', 'database'] },
  { title: "JavaScriptの'this'キーワードを理解する", content: " 'this'の挙動は関数の呼ばれ方によって変わるようです。異なるコンテキスト（グローバル、オブジェクトメソッド、アロー関数）について解説をお願いします。", tags: ['javascript', 'core-js'] },
  { title: "Pythonの仮想環境：なぜ、そしてどうやって？", content: "なぜPython開発において仮想環境は重要なのでしょうか？また、`venv`を使って仮想環境を作成・管理する最も簡単な方法は何ですか？", tags: ['python', 'venv', 'dependency-management'] },
];

export const ALL_QUESTIONS: Question[] = [
    ...BASE_QUESTIONS,
    ...ADDITIONAL_QUESTIONS.map((q, i) => ({
        ...q,
        id: BASE_QUESTIONS.length + i + 1,
        // FIX: Generate mock Answer objects to satisfy the Question type, as the original code created an array of `undefined`.
        answers: Array.from({ length: Math.floor(Math.random() * 5) }, (_, j) => ({
            id: 100 + (i * 5) + j, // Generate unique-ish IDs for mock answers
            author: RANKED_USERS[Math.floor(Math.random() * RANKED_USERS.length)],
            content: "これはデモンストレーション用に作成されたプレースホルダーの回答です。",
            isBestAnswer: false,
        })),
    }))
];


// --- DYNAMIC LAYOUT GENERATION ---

const CARD_WIDTH = 288;
const CARD_HEIGHT = 160;
const GAP = 16;
const REGION_PADDING = 24;

export const CATEGORY_DEFINITIONS = [
    { name: 'CSS', color: 'rgba(110, 159, 255, 0.15)', borderColor: '#6e9fff', tags: ['css', 'layout', 'grid'] },
    { name: 'React', color: 'rgba(70, 203, 144, 0.15)', borderColor: '#46cb90', tags: ['react', 'redux', 'hooks'] },
    { name: 'JavaScript', color: 'rgba(255, 187, 95, 0.15)', borderColor: '#ffbb5f', tags: ['javascript', 'typescript', 'core-js', 'generics'] },
    { name: 'General', color: 'rgba(188, 198, 224, 0.15)', borderColor: '#bcc6e4', tags: [] },
];

const getRegionDefForTags = (tags: string[]): typeof CATEGORY_DEFINITIONS[0] => {
    return CATEGORY_DEFINITIONS.find(def => def.tags.some(t => tags.includes(t))) || CATEGORY_DEFINITIONS[CATEGORY_DEFINITIONS.length - 1];
};

export const generateLayout = (questions: Question[]) => {
    const questionsByCategory = questions.reduce((acc, question) => {
        const categoryName = getRegionDefForTags(question.tags).name;
        if (!acc[categoryName]) acc[categoryName] = [];
        acc[categoryName].push(question);
        return acc;
    }, {} as Record<string, Question[]>);


    // Stage 1: Pre-calculate size and relative question positions for each category
    const sizedRegions: (Omit<CategoryRegion, 'x'|'y'> & { questions: MapQuestion[] })[] = [];

    CATEGORY_DEFINITIONS.forEach(def => {
        const categoryQuestions = questionsByCategory[def.name];
        if (!categoryQuestions || categoryQuestions.length === 0) return;

        // Find the optimal number of columns to make the card area as square as possible
        const n = categoryQuestions.length;
        let bestCols = n;
        let minAspectRatioDiff = Infinity;

        for (let currentCols = 1; currentCols <= n; currentCols++) {
            const currentRows = Math.ceil(n / currentCols);
            const width = currentCols * (CARD_WIDTH + GAP);
            const height = currentRows * (CARD_HEIGHT + GAP);
            const aspectRatio = width / height;
            const diff = Math.abs(aspectRatio - 1);

            if (diff < minAspectRatioDiff) {
                minAspectRatioDiff = diff;
                bestCols = currentCols;
            }
        }
        
        const cols = bestCols;
        const rows = Math.ceil(categoryQuestions.length / cols);

        const regionWidth = cols * (CARD_WIDTH + GAP) - GAP + (REGION_PADDING * 2);
        const regionHeight = rows * (CARD_HEIGHT + GAP) - GAP + (REGION_PADDING * 2);

        const relativeQuestions: MapQuestion[] = [];
        categoryQuestions.forEach((question, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const xOffset = (row % 2 === 1 && cols > 1) ? (CARD_WIDTH + GAP) / 2 : 0;
            
            const x = REGION_PADDING + col * (CARD_WIDTH + GAP) + xOffset;
            const y = REGION_PADDING + row * (CARD_HEIGHT + GAP);

            relativeQuestions.push({ ...question, position: { x, y } });
        });

        sizedRegions.push({
            name: def.name,
            width: regionWidth,
            height: regionHeight,
            color: def.color,
            borderColor: def.borderColor,
            questions: relativeQuestions,
        });
    });

    if (sizedRegions.length === 0) {
        return { regions: [], questions: [], mapDimensions: { width: 0, height: 0 } };
    }

    // Stage 2: Calculate grid layout properties
    const numRegions = sizedRegions.length;
    const gridCols = Math.ceil(Math.sqrt(numRegions));
    const gridRows = Math.ceil(numRegions / gridCols);

    const rowHeights: number[] = [];
    for (let r = 0; r < gridRows; r++) {
        const rowRegions = sizedRegions.slice(r * gridCols, (r + 1) * gridCols);
        if (rowRegions.length > 0) {
            const maxHeight = Math.max(...rowRegions.map(reg => reg.height));
            rowHeights.push(maxHeight);
        }
    }
    
    const rowYOffsets = [0];
    for (let i = 0; i < rowHeights.length - 1; i++) {
        rowYOffsets.push(rowYOffsets[i] + rowHeights[i]);
    }
    
    // Stage 3: Place regions and questions in the grid
    const finalRegions: CategoryRegion[] = [];
    const finalQuestions: MapQuestion[] = [];
    let mapWidth = 0;

    for (let r = 0; r < gridRows; r++) {
        const rowRegions = sizedRegions.slice(r * gridCols, (r + 1) * gridCols);
        if (rowRegions.length === 0) continue;

        let currentX = 0;
        
        rowRegions.forEach(region => {
            finalRegions.push({
                name: region.name,
                x: currentX,
                y: rowYOffsets[r],
                width: region.width,
                height: rowHeights[r],
                color: region.color,
                borderColor: region.borderColor,
            });

            region.questions.forEach(q => {
                finalQuestions.push({
                    ...q,
                    position: {
                        x: q.position.x + currentX,
                        y: q.position.y + rowYOffsets[r],
                    }
                });
            });

            currentX += region.width;
        });
        
        mapWidth = Math.max(mapWidth, currentX);
    }

    const mapHeight = rowHeights.reduce((sum, h) => sum + h, 0);

    return { regions: finalRegions, questions: finalQuestions, mapDimensions: { width: mapWidth, height: mapHeight } };
};
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
  { id: 2, title: "Amazing Design Tips", author: "XTECH LITE", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 3, title: "UX Case Study: Mobile", author: "開発者S", date: "2025/8/13", likes: 0, comments: 1 },
  { id: 4, title: "Startup Funding Guide", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 5, title: "AI for Beginners", author: "開発者S", date: "2025/8/13", likes: 1, comments: 1 },
  { id: 6, title: "Cool CSS Hacks", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
  { id: 7, title: "TypeScript Patterns", author: "開発者S", date: "2025/8/13", likes: 0, comments: 0 },
];

export const MY_ARTICLES: Article[] = [
  { id: 8, title: "はじめてのMarkdownガイド", author: "XTECH LITE", date: "2025/8/13", likes: 2, comments: 2, imageUrl: "https://picsum.photos/seed/tech1/300/200" },
  { id: 9, title: "Amazing Design Tips", author: "XTECH LITE", date: "2025/8/13", likes: 0, comments: 0 },
];

export const DRAFTS: Article[] = [
  { id: 10, title: "New Article", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 11, title: "New Article", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 12, title: "New Article", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
  { id: 13, title: "New Article", author: "開発者S", date: "2025/9/14", likes: 0, comments: 0, isDraft: true },
];

export const BADGES: Record<string, Badge> = {
  TOP_EXPERT: { id: 'TOP_EXPERT', name: 'Top Expert', description: 'Awarded for having 10+ best answers.', icon: '🏆', color: 'text-yellow-400' },
  PROBLEM_SOLVER: { id: 'PROBLEM_SOLVER', name: 'Problem Solver', description: 'Awarded for solving 15+ questions.', icon: '✅', color: 'text-green-400' },
  PROLIFIC_POSTER: { id: 'PROLIFIC_POSTER', name: 'Prolific Poster', description: 'Awarded for providing 20+ answers.', icon: '✍️', color: 'text-blue-400' },
  REACT_GURU: { id: 'REACT_GURU', name: 'React Guru', description: 'A recognized expert in the React category.', icon: '⚛️', color: 'text-cyan-400' },
};

export const RANKED_USERS: RankedUser[] = [
    { id: 'user1', name: 'Helpful Hedgehog #1', avatar: '🦔', tags: ['React', 'TypeScript', 'Node.js'], answers: 25, solved: 20, bestAnswers: 15, badges: [BADGES.TOP_EXPERT, BADGES.PROBLEM_SOLVER, BADGES.PROLIFIC_POSTER, BADGES.REACT_GURU] },
    { id: 'user2', name: 'Code Chameleon #2', avatar: '🦎', tags: ['Python', 'Django', 'Data Science'], answers: 22, solved: 18, bestAnswers: 10, badges: [BADGES.TOP_EXPERT, BADGES.PROBLEM_SOLVER, BADGES.PROLIFIC_POSTER] },
    { id: 'user3', name: 'Syntax Sparrow #3', avatar: '🐦', tags: ['Java', 'Spring', 'SQL'], answers: 18, solved: 15, bestAnswers: 8, badges: [BADGES.PROBLEM_SOLVER] },
    { id: 'user4', name: 'Logic Lion #4', avatar: '🦁', tags: ['Go', 'C#', '.NET'], answers: 15, solved: 11, bestAnswers: 5, badges: [] },
    { id: 'user5', name: 'Debug Duck #5', avatar: '🦆', tags: ['PHP', 'Laravel', 'Vue'], answers: 12, solved: 9, bestAnswers: 4, badges: [] },
].sort((a, b) => b.bestAnswers - a.bestAnswers);


const BASE_QUESTIONS: Question[] = [
    {
        id: 1,
        title: "How to properly center a div in CSS?",
        content: "I've been trying to center a div both horizontally and vertically for ages. I've tried margin: auto, flexbox, grid, but something always seems to be off. What's the most reliable, modern way to do this for any situation?",
        tags: ['css', 'flexbox', 'layout'],
        answers: [
            { id: 1, author: RANKED_USERS[0], content: "Flexbox is your best friend here! Just set `display: flex`, `justify-content: center`, and `align-items: center` on the parent container. It's pretty much foolproof.", isBestAnswer: true },
            { id: 2, author: RANKED_USERS[2], content: "For absolute positioning within a relative parent, you can use `position: absolute`, `top: 50%`, `left: 50%`, and `transform: translate(-50%, -50%)`. This is also a classic method.", isBestAnswer: false },
        ]
    },
    {
        id: 2,
        title: "What is the difference between `useEffect` and `useLayoutEffect` in React?",
        content: "I understand that both hooks are used for side effects, but I'm not clear on the exact difference in their timing and when I should choose one over the other. Can someone explain with a simple example?",
        tags: ['react', 'hooks', 'typescript'],
        answers: [
            { id: 3, author: RANKED_USERS[0], content: "`useEffect` runs asynchronously after the render is painted to the screen, while `useLayoutEffect` runs synchronously before the browser paints. Use `useLayoutEffect` if you need to measure DOM elements or perform mutations that the user shouldn't see in a flicker.", isBestAnswer: false },
        ]
    }
];

// Add more questions for a richer map
const ADDITIONAL_QUESTIONS: Omit<Question, 'id' | 'answers'>[] = [
  { title: "Grid vs Flexbox: Which to use?", content: "When building complex layouts, what are the deciding factors for choosing CSS Grid over Flexbox, or vice versa?", tags: ['css', 'layout', 'grid'] },
  { title: "How to handle async operations in Redux?", content: "What is the standard way to manage asynchronous actions like API calls in a Redux application? I've heard of thunks and sagas.", tags: ['react', 'redux', 'async'] },
  { title: "Best practices for REST API error handling?", content: "What are some best practices for designing error responses in a RESTful API? Should I use standard HTTP codes? What should the body contain?", tags: ['api', 'rest', 'node.js'] },
  { title: "How to debounce a function in JavaScript?", content: "I have an event that fires very frequently, like a search input. How can I implement a debounce function from scratch to limit how often my function is called?", tags: ['javascript', 'performance'] },
  { title: "What are generics in TypeScript?", content: "Can someone explain TypeScript generics with a practical example? I'm having trouble understanding how they make code more reusable.", tags: ['typescript', 'generics'] },
  { title: "SQL 'JOIN' explained for beginners", content: "I'm new to SQL and find the different types of JOINs (INNER, LEFT, RIGHT, FULL) confusing. What's a simple way to remember the difference?", tags: ['sql', 'database'] },
  { title: "Understanding the 'this' keyword in JavaScript", content: "The behavior of 'this' seems to change depending on how a function is called. Can someone break down the different contexts (global, object method, arrow function)?", tags: ['javascript', 'core-js'] },
  { title: "Python virtual environments: why and how?", content: "Why are virtual environments so important in Python development, and what's the simplest way to create and manage them using `venv`?", tags: ['python', 'venv', 'dependency-management'] },
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
            content: "This is a placeholder answer created for demonstration purposes.",
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
    { name: 'CSS', color: 'rgba(59, 130, 246, 0.1)', borderColor: '#3b82f6', tags: ['css', 'layout', 'grid'] },
    { name: 'React', color: 'rgba(20, 184, 166, 0.1)', borderColor: '#14b8a6', tags: ['react', 'redux', 'hooks'] },
    { name: 'JavaScript', color: 'rgba(245, 158, 11, 0.1)', borderColor: '#f59e0b', tags: ['javascript', 'typescript', 'core-js', 'generics'] },
    { name: 'General', color: 'rgba(148, 163, 184, 0.1)', borderColor: '#94a3b8', tags: [] },
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

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ALL_QUESTIONS, generateLayout, CATEGORY_DEFINITIONS } from '../constants';
import { Question, MapQuestion, CategoryRegion } from '../types';
import QuestionMapCard from '../components/QuestionMapCard';
import QuestionDetailSidebar from '../components/QuestionDetailSidebar';
import Minimap from '../components/Minimap';
import LeaderboardModal from '../components/LeaderboardModal';
import { MaximizeIcon, TrophyIcon, SearchIcon, SortAscendingIcon } from '../components/icons';

type SortOption = 'default' | 'most-answers' | 'fewest-answers';

const FaqPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [currentRegion, setCurrentRegion] = useState<CategoryRegion | null>(null);
  const [isInitialPanSet, setIsInitialPanSet] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const mapRef = useRef<HTMLDivElement>(null);

  // Memoize sorting
  const sortedQuestions = useMemo(() => {
    const questions = [...ALL_QUESTIONS];
    switch (sortOption) {
      case 'most-answers':
        return questions.sort((a, b) => b.answers.length - a.answers.length);
      case 'fewest-answers':
        return questions.sort((a, b) => a.answers.length - b.answers.length);
      case 'default':
      default:
        return questions.sort((a, b) => a.id - b.id);
    }
  }, [sortOption]);
  
  // Memoize layout generation
  const { regions, questions, mapDimensions } = useMemo(() => {
      return generateLayout(sortedQuestions);
  }, [sortedQuestions]);

  // Memoize filtering
  const filteredQuestionIds = useMemo(() => {
    if (!searchQuery) return null; // Return null when no filter is active
    const lowercasedQuery = searchQuery.toLowerCase();
    return new Set(
      questions
        .filter(q => 
          q.title.toLowerCase().includes(lowercasedQuery) ||
          q.tags.some(t => t.toLowerCase().includes(lowercasedQuery))
        )
        .map(q => q.id)
    );
  }, [searchQuery, questions]);

  const resetView = (instant = false) => {
    if (!mapRef.current || !mapDimensions.width) return;
    if (instant) setIsPanning(true);
    
    const { clientWidth, clientHeight } = mapRef.current;
    const padding = 80;

    const scaleX = (clientWidth - padding * 2) / mapDimensions.width;
    const scaleY = (clientHeight - padding * 2) / mapDimensions.height;
    const newZoom = Math.min(scaleX, scaleY, 1);

    const newPanX = (clientWidth - mapDimensions.width * newZoom) / 2;
    const newPanY = (clientHeight - mapDimensions.height * newZoom) / 2;

    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
    if(instant) setTimeout(() => setIsPanning(false), 0);
  };


  useEffect(() => {
    if (mapRef.current) {
      setViewport({
        width: mapRef.current.clientWidth,
        height: mapRef.current.clientHeight,
      });
    }
  }, []);

  useEffect(() => {
      if (viewport.width === 0 || isInitialPanSet) return;
      resetView(true);
      setIsInitialPanSet(true);
  }, [viewport, isInitialPanSet, mapDimensions]); // Depend on mapDimensions

  useEffect(() => {
    if (!viewport.width) return;

    const centerX = (-pan.x + viewport.width / 2) / zoom;
    const centerY = (-pan.y + viewport.height / 2) / zoom;

    const activeRegion = regions.find(r => 
      centerX >= r.x && centerX <= r.x + r.width &&
      centerY >= r.y && centerY <= r.y + r.height
    );
    
    if (activeRegion?.name !== currentRegion?.name) {
        setCurrentRegion(activeRegion || null);
    }
  }, [pan, zoom, viewport.width, viewport.height, currentRegion, regions]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    mapRef.current?.classList.remove('cursor-grab');
    mapRef.current?.classList.add('cursor-grabbing');
    setIsPanning(true);
    setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    e.preventDefault();
    const newX = e.clientX - startPan.x;
    const newY = e.clientY - startPan.y;
    setPan({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    mapRef.current?.classList.remove('cursor-grabbing');
    mapRef.current?.classList.add('cursor-grab');
    setIsPanning(false);
  };
  
  const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault();
      const scaleAmount = -e.deltaY * 0.001;
      const newZoom = Math.min(Math.max(zoom * (1 + scaleAmount), 0.15), 2.5);
      
      const rect = mapRef.current!.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const newPanX = mouseX - (mouseX - pan.x) * (newZoom / zoom);
      const newPanY = mouseY - (mouseY - pan.y) * (newZoom / zoom);
      
      setZoom(newZoom);
      setPan({ x: newPanX, y: newPanY });
  };


  const handleCardClick = (question: MapQuestion) => {
    setSelectedQuestion(question);
  };

  const handleCloseSidebar = () => {
    setSelectedQuestion(null);
  };

  const panToRegion = (region: CategoryRegion) => {
    const targetX = region.x + region.width / 2;
    const targetY = region.y + region.height / 2;
    const newPanX = -targetX * zoom + viewport.width / 2;
    const newPanY = -targetY * zoom + viewport.height / 2;
    setPan({ x: newPanX, y: newPanY });
  };

  const sortLabels: Record<SortOption, string> = {
    'default': 'デフォルト',
    'most-answers': '回答が多い順',
    'fewest-answers': '回答が少ない順',
  };

  return (
    <div 
      className="w-screen h-screen bg-[#e3f6f5] overflow-hidden cursor-grab select-none relative"
      ref={mapRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Parallax Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          transform: `translate(${pan.x * 0.25}px, ${pan.y * 0.25}px) scale(${zoom})`,
          backgroundImage: 'linear-gradient(rgba(137, 221, 224, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(137, 221, 224, 0.7) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div 
        className="absolute top-0 left-0"
        style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transition: isPanning ? 'none' : 'transform 0.3s ease-out' }}
      >
        {/* Category background regions */}
        {regions.map(region => (
          <div
            key={region.name}
            className="absolute flex items-center justify-center transition-shadow duration-300"
            style={{
              left: region.x,
              top: region.y,
              width: region.width,
              height: region.height,
              backgroundColor: region.color,
              borderRadius: '20px',
              boxShadow: `0 8px 32px 0 ${region.borderColor}33`,
            }}
          >
            <h2 
              className="text-8xl font-black text-[#272343]/5 uppercase tracking-widest"
              style={{ userSelect: 'none' }}
            >
              {region.name}
            </h2>
          </div>
        ))}

        {/* Question Cards */}
        {questions.map(q => (
          <QuestionMapCard 
            key={q.id} 
            question={q} 
            onClick={handleCardClick}
            isHighlighted={filteredQuestionIds === null || filteredQuestionIds.has(q.id)}
            isSearchActive={!!searchQuery}
          />
        ))}
      </div>
      
      {/* --- OVERLAY UI --- */}
       <div className="fixed bottom-6 left-6 z-20" onMouseDown={(e) => e.stopPropagation()}>
         <div className="bg-white/50 backdrop-blur-md rounded-lg p-2 flex flex-col gap-2 shadow-lg">
           <button 
              onClick={() => resetView()} 
              className="p-2 text-gray-600/70 hover:text-cyan-600 hover:bg-white/50 rounded-md transition-colors"
              aria-label="Reset View"
              title="Reset View"
            >
             <MaximizeIcon className="w-6 h-6" />
           </button>
           <button 
              onClick={() => setIsLeaderboardOpen(true)}
              className="p-2 text-gray-600/70 hover:text-yellow-500 hover:bg-white/50 rounded-md transition-colors"
              aria-label="View Leaderboard"
              title="View Leaderboard"
            >
             <TrophyIcon className="w-6 h-6" />
           </button>
         </div>
       </div>

      <div 
          className="fixed top-6 left-6 z-20"
          onMouseDown={(e) => e.stopPropagation()}
      >
          <div className="bg-white/40 backdrop-blur-sm text-[#272343] px-4 py-2 rounded-lg shadow-lg border border-gray-300/50">
              <span className="text-xs uppercase tracking-wider text-gray-500">現在のゾーン</span>
              <p className="font-bold text-lg text-gray-700">
                  {currentRegion ? currentRegion.name : '探検中'}
              </p>
          </div>
      </div>

      <div 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-20 bg-white/40 backdrop-blur-md rounded-lg shadow-lg p-2 flex items-center gap-2 border border-gray-300/50" onMouseDown={(e) => e.stopPropagation()}
      >
        {regions.map(region => {
          const isActive = currentRegion?.name === region.name;
          const solidColor = region.borderColor;

          return (
            <button
              key={region.name}
              onClick={() => panToRegion(region)}
              className="px-4 py-1.5 text-sm font-semibold rounded-md transition-all duration-300 border-2"
              style={{
                backgroundColor: isActive ? solidColor : 'transparent',
                color: isActive ? 'white' : solidColor,
                borderColor: solidColor,
                textShadow: isActive ? `0 0 8px ${solidColor}`: 'none',
                boxShadow: isActive ? `0 0 12px -2px ${solidColor}` : 'none',
              }}
            >
              {region.name}
            </button>
          );
        })}
      </div>
       
       <div className="fixed top-[76px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" onMouseDown={(e) => e.stopPropagation()}>
         {/* Search Bar */}
          <div className="relative">
            <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input 
              type="text"
              placeholder="質問をさがす..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-72 bg-white/40 backdrop-blur-md rounded-lg shadow-lg pl-10 pr-4 py-2 text-gray-700 border border-gray-300/50 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow"
            />
          </div>
          {/* Sort Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 w-48 justify-between bg-white/40 backdrop-blur-md rounded-lg shadow-lg px-4 py-2 text-gray-700 border border-gray-300/50 hover:border-gray-400 transition-colors">
              <SortAscendingIcon className="w-5 h-5 text-gray-400" />
              <span className="flex-grow text-left">{sortLabels[sortOption]}</span>
              <span className="text-gray-400">▼</span>
            </button>
            <div className="absolute top-full mt-1 w-48 bg-white/80 backdrop-blur-md rounded-lg border border-gray-300/50 shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {(Object.keys(sortLabels) as SortOption[]).map(option => (
                 <button 
                    key={option}
                    onClick={() => setSortOption(option)}
                    className={`block w-full text-left px-4 py-2 text-sm ${sortOption === option ? 'bg-cyan-500/20 text-cyan-600' : 'text-gray-700 hover:bg-gray-400/20'}`}
                  >
                   {sortLabels[option]}
                 </button>
              ))}
            </div>
          </div>
       </div>

      <Minimap 
        pan={pan}
        zoom={zoom}
        mapDimensions={mapDimensions}
        viewportDimensions={viewport}
        categoryRegions={regions}
      />

      <QuestionDetailSidebar 
        question={selectedQuestion} 
        onClose={handleCloseSidebar} 
      />
      <LeaderboardModal 
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />
    </div>
  );
};

export default FaqPage;
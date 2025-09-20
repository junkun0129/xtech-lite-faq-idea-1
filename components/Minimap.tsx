import React from 'react';

interface MinimapProps {
    pan: { x: number; y: number };
    zoom: number;
    mapDimensions: { width: number; height: number };
    viewportDimensions: { width: number; height: number };
    categoryRegions: { name: string; x: number; y: number; width: number; height: number; color: string; borderColor: string }[];
}

const MINIMAP_SIZE = 200; // px

const Minimap: React.FC<MinimapProps> = ({ pan, zoom, mapDimensions, viewportDimensions, categoryRegions }) => {
    if (viewportDimensions.width === 0 || mapDimensions.width === 0) return null;

    const mapAspectRatio = mapDimensions.height / mapDimensions.width;
    const minimapHeight = MINIMAP_SIZE * mapAspectRatio;

    const scaleX = MINIMAP_SIZE / mapDimensions.width;
    const scaleY = minimapHeight / mapDimensions.height;

    const viewportStyle = {
        width: (viewportDimensions.width / zoom) * scaleX,
        height: (viewportDimensions.height / zoom) * scaleY,
        transform: `translate(${-pan.x * scaleX}px, ${-pan.y * scaleY}px)`,
        border: '2px solid #06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.3)',
    };

    return (
        <div 
            className="fixed bottom-6 right-6 z-20 bg-slate-800/50 backdrop-blur-md border-2 border-slate-600/50 rounded-lg shadow-2xl overflow-hidden"
            style={{ width: MINIMAP_SIZE, height: minimapHeight }}
            onMouseDown={(e) => e.stopPropagation()} // Prevent map pan
        >
            {/* Category regions in minimap */}
            {categoryRegions.map(region => (
                <div
                    key={region.name}
                    className="absolute"
                    style={{
                        left: region.x * scaleX,
                        top: region.y * scaleY,
                        width: region.width * scaleX,
                        height: region.height * scaleY,
                        backgroundColor: region.borderColor,
                        opacity: 0.5,
                    }}
                ></div>
            ))}
            
            {/* Viewport indicator */}
            <div className="absolute top-0 left-0" style={viewportStyle}></div>
        </div>
    );
};

export default Minimap;
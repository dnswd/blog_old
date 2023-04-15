import {useRef, useState, useCallback, useEffect, ReactNode} from 'react'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

export default function ContinuousScrollLoop({
    surroundingBackup = 4,
    outerStyle = {},
    innerStyle = {},
    children
}: {
    surroundingBackup: number;
    scrollPaddingPercentage: number;
    outerStyle: React.CSSProperties;
    innerStyle: React.CSSProperties;
    children: ReactNode | ReactNode[];
}): JSX.Element | null {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    const backupHeight = height * surroundingBackup;

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollTop;
            if (scroll < backupHeight || scroll >= backupHeight + height) {
                scrollRef.current.scrollTop = backupHeight + (scroll % height);
            }
        }
    }, [height, backupHeight]);

    useIsomorphicLayoutEffect(() => {
        if (contentRef.current && scrollRef.current) {
            setHeight(contentRef.current.offsetHeight);
            scrollRef.current.scrollTop = backupHeight; 
        }
    }, [backupHeight]);

    return (
        <div className="infinite-scroll-loop-outer" style={outerStyle}>
            <div
                className="infinite-scroll-loop-inner"
                ref={scrollRef}
                style={{
                    height,
                    ...innerStyle
                }}
                onScroll={handleScroll}
            >
                {Array.from({length: backupHeight}, (_,k) => (
                        <div key={`backup-top-${k}`}>{children}</div>
                    ))}
                <div ref={contentRef}>{children}</div>
                {Array.from({length: backupHeight}, (_,k) => (
                        <div key={`backup-bottom-${k}`}>{children}</div>
                    ))}
            </div>
        </div>
    );
}

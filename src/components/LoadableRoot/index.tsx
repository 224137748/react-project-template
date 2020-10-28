import React , {Suspense, Children} from 'react';
import FallbackLoader from 'components/Placeholder/FallbackLoader';
import ErrorBoundary from 'components/ErrorBoundary';

export interface LoadableRootProps {
  opts?: {
    fallback?: {
      height?: number | string;
      title?: string;
    };
    boundary?: {
      height?: number | string;
    }
  };
  children: React.ReactNode;
}


const LoadableRoot: React.FC<LoadableRootProps> = ({ children, opts}) => {
  return (
    <Suspense fallback={<FallbackLoader height={opts?.fallback?.height} title={opts?.fallback?.title}/>}>
      <ErrorBoundary height={opts?.boundary?.height}> {Children.only(children)} </ErrorBoundary>
    </Suspense>
  );
};

export default LoadableRoot;
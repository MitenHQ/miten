import React, { FC, useEffect, useRef } from 'react';

type Props<T = any[]> = {
  data: T;
  makeChart: (container: SVGElement, data: T) => void;
  className?: string;
};

export const D3Wrapper: FC<Props> = (props) => {
  const d3Container = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (props.data && d3Container.current) {
      props.makeChart(d3Container.current, props.data);
    }
  }, [props.data, d3Container.current]);

  return <svg className={props.className} ref={d3Container} />;
};

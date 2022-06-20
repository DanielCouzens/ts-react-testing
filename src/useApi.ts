import { FC, useState, useEffect } from "react";

export const APIComponent: FC = () => {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  //   return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};

/* 


time stamp

29:36

stopped to learn more about react hooks

*/

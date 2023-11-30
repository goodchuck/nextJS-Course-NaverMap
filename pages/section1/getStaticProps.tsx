import type { NextPage } from 'next';

interface Props {
    data: number;
}

const Example: NextPage<Props> = ({ data }) => {
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data}</p>
        </main>
    );
};

export default Example;

export async function getStaticProps() {
    const delayInSeconds = 2;
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    );

    return {
        props: { data },
        /**
         * Incremental Static Regeneration을 지원하기위해 만든 속성
         * 이미 빌드과 완료된 사이트에서 주기적으로 정적인 페이지를 업데이트 할 수 있게 됨
         * 해당 페이지만 업데이트 하는 것이기 때문에 전체 사이트를 다시 빌드할 필요가 없다.
         * /
        revalidate: 5 /** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration */
    };
}

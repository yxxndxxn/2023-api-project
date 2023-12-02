import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-7 font-medium text-gray-900">
                 안녕하세요
                 <br className="mb-5 hidden lg:inline-block"/>
                 <strong>윤다인</strong> 입니다
                
                
            </h1>
            <p className="mb-8 leading-relaxed">
                 숭실대학교 글로벌미디어학부에 재학중인 윤다인 입니다.
                컴퓨터시스템개론 개인 프로젝트로 노션API를 이용하여 노션을 DataBase로 한 웹 어플리케이션을 만들어 보았습니다.
                짧은 기간 내에 제작한 것이기에 부족한 점이 많지만 최선을 다해 보았습니다. 감사합니다.
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
 
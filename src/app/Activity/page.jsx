import React from 'react';
import MultiCardCarousel from '../components/MultiCardCarousel';
import "../globals.css";

export default function Activity() {
    
    let cards = [
        {
            title: "Aurobindo Hostel for SC",
            content: "People of Schedule cast community are very too much poor they have no source of income. They earn their lively hood by way of traditional business i.e. net for catching fish, fishing rod and selling fish etc. Financial condition of the people of the schedule cast community is not sound as such they cannot provide education to their son. We have launched a hostel for S.C. student to provide education to the children of Schedule cast family. So that the S.C. children may prosper and develop efficacious in feature life. We are trying our best to bring the SC students in the main stream of life through proper and education, love, care and protection. Thanks to Govt. of India for financial assistance"
        },
        {
            title: "Family Counseling Center",
            content: "We are running the Family Counseling Centre from 1994 for salving the marital dispute. In the present age every Family are suffering from various kind of complex such as marital dispute, polygamy, Dowry, unemployed, dissatisfaction for sexual hunger unable to issue child. When our counselor of F.C.C get information from family members police station the counselor enquire about this matter to assertion actual state of affairs. After that the counselor issue notices both the parties to come to the centre fixing date for hearing. On the date of hearing both the parties come to the office. The counselor counseling both the parties. The counselor solves the problem by mutual understanding. In such away many cases have been solved. Now the so many couples are enjoying peaceful life. When the case is completed and no chance of solve the counselor refer the case to the legal aid to solve the matter."
        },
    ]
    
    return (
        <div className="flex-1 w-full">
            <div className="flex-col items-center text-center mb-3">
                <h1 className="text-4xl font-bold my-2">Activity</h1>
                <h2 className="text-2xl">Our Project View On Institutional Care</h2>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-full dark:border-gray-700 dark:bg-gray-800 mb-4">
                <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Observation Home For JCL Boys</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We have started Observation home in the year 2012, January.The all J.C.L Boys of observation home under J.J.act of I.C.P.S are involved with various kind of antisocial activities . The main object of the Govt. is to correct the life of criminal boy by care protection and love white view to bring them in the main stream of life so that the J.C.L Boys may stand at their won fit and prosper in future life. We have already admitted two J.C.L boys in the school. Beside this we have also engaged arts and craft teacher for unschooled J.C.L boys. There is an all arrangement of playing football, volley ball, cricket.14 staff has been engaged to look after the J.C.L Boys. Food clothes are regular supply to the J.C.L Boys and medical treatment are properly done by regd. medical practitioner. Thanks to Govt. of W.B. & Govt. of India for financial assistance.</p>
                </div>
                <img className="object-cover w-full rounded-t-lg h-auto sm:h-auto sm:w-52 sm:rounded-none sm:rounded-s-lg" src="http://www.chiranabin.org.in/style/images/pic1.png" alt="image of people" />
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-full dark:border-gray-700 dark:bg-gray-800 mb-4">
                <img className="object-cover w-full rounded-t-lg h-auto sm:h-auto sm:w-52 sm:rounded-none sm:rounded-s-lg" src="http://www.chiranabin.org.in/style/images/pic2.png" alt="image of people playing cricket" />
                <div className="flex flex-col p-4 leading-normal order-first sm:order-last">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CHILDREN AND AFTER CARE HOME FOR WOMEN & GIRLS OF ICPS UNDER j.j. act</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are running the children home from the year 1998.We at first started the children home (formerly shelter home) with limited MR girls now its strength has reached to the 167. Forty two staffs have been engaged to look after MR girls. There are two categories inmates i.e. mild and moderate .The inmates are homeless parent less, and have no identity. The inmates come from CWC. When the inmates come to the children home they were ill faded and ill clad, and feeble. They cant eat individually and wear garments .Now they are vivacious for proper treatment care protection food lodging etc. It is our great pleasure that we have able retained about 42 inmates to the mother lap. We have made and arrangement of education, recreation, V.T so that the inmates may get relief from monotonous life and enjoy recreation by way of song, music under the guidance of musician and also arrangement of tailoring sewing so that the inmates may be self supported. Special educator teaches the mild category inmates with great care and attentively. It is found the inmates are developing gradually improve in studies, dancing, song and recitation. Inmates participate in the different programmers of our organization. Thanks to Govt. of W.B. & Govt. of India for financial assistance.</p>
                </div>
            </div>
            <div className="flex-col items-center text-center my-3 border-b">
                <h2 className="text-4xl my-2 font-bold">Our Achievements</h2>
            </div>
            {/* starting card Carousel */}
            <div className="w-[60%] m-auto pt-11 border shadow rounded-lg">
                <MultiCardCarousel cards={cards} />
            </div>
        </div>
    )
}

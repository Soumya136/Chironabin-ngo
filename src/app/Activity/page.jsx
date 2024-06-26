import React from 'react';
import MultiCardCarousel from '../components/MultiCardCarousel';
import Image from 'next/image'

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
        {
            title: "Women Help Line",
            content: "The Organization is running WOMEN HELP LINE under SWADHAR SCHEME from FEB 2009. The main object and activities of WOMEN HELP LINE is to collect the information of torture, oppress, rapped, trafficking and eve teasing women and girls after that send report to the police station for taking proper step and there after it is inform to other Govt. offices i.e. Panchayate office, Drug office, Mahila Samity for support service care and protection the such categories of women and girls for taking propers step so that the victimize girls and women may live in the society with dignity and in safety place. Three staffs are engaged of the projects in 24 hours. Women help line cases are transferred own home, children and girls home, FCC, Police station G.P., Drug centre, Mohila Bikash Kendra. Thanks to Govt. of India for financial assistance",
        },
        {
            title: "INTEGRATED REHABILITATION CENTRE FOR ADDICT",
            content: "Due to constant poverty and unemployment problem the young generation is suffering from frustration and despondency. Result in which drug addicts are involved with larceny for lively hood and other bare necessities of life. To create controlled detoxification, we launched drug de-addiction centre to bring the drug addicts into the main stream of life by ways of proper counseling, detoxification, care, protection, love, healthy food, yoga, meditation, and proper medical treatment. They are returned back to the family with the skill to cope in the real world. Thanks to M.S.J& E, Govt. of India"
        },
        {
            title: "VIVEKANANDA ANATH ASHRAM",
            content: "We are running the Destitute Home for boys under Cottage Scheme since last 1985. At present the strength of Destitute Home for boys are 25.All inmates are belongs to the poor classes family. At present they have inclination towards education but due to constant poverty and bad pecuniary condition all hopes of becoming a learned man are nipped in the bud. Govt. sent the such classes of inmates for admits to destitute home for boys to provide better education so that such kind of poor inmates may prosper in feature life under the guidance of teacher. As such we have made an arrangement for physical development which is badly need in student life i.e. arrangement of sports and games, yoga, seat and draw, cultural programme and exercise for physical strength. The Inmates of destitute Home reads at local school. Every year some students of our destitute home appear in the Madhyamick or higher Secondary education and succeed. We have a doctor for check up the health of inmates in every fortnight. We are always aware about protection and care of every inmates about education, health service, food and clothes. Thanks to M.S.J& E, Govt. of India"
        }, {
            title: "Multi Service Centre for Aged",
            content: "At present age it is observe that due to break up of joint family the family members refused to live in the nuclear family. The nuclear family is a curse of the society. Due to live in nuclear family the bondage of love, affection and kindness, compassion, respect to the aged man of the family is being disappeared day by day. Aged persons of the family is regular torture and oppress by the son and even the aged persons get no food, clothes, health service, care and protection from the family. In such critical stage and inhuman brutality and constant starvation the health of aged person is deteriorated at last the life of aged is reduced to five elements. This is why? We have launched a multi service Centre in the year 2009 to relief the beneficiaries from monotonous life by way of prayer, sankritan, religious book, reading newspaper and playing indoor game i.e. ludo, card etc. Arrangement of outing for beneficiaries in every year for changing of the mind. Doctor check up the health of beneficiaries once in week. Tiffin is given to them at tiffin hours. In this centre the beneficiaries get opportunities to talk with each other for getting relief from mental agony. The staffs have good terms with the beneficiaries."
        },
        {
            title: "Chiranabin Library",
            content: "Chiranabin have an own Library at Parbakshi, Joypur, Howrah. 256 students both male & female are the member of the library. There are more than 12000 books in our library, which is very helpful to the students. Newspaper is taken regularly in the library for reading purpose of beneficiaries. Our librarian is supervised the library. Library has an important role in every spare of life. Local people of all classes and students of colleges and schools get opportunity to know various kinds of news and incidents of different countries by way of reading books and gather knowledge. On the point of view there is badly need of library for expansion of knowledge and experience."
        },
        {
            title: "NURSING SCHOOL",
            content: "In collaboration with Rotary club Howrah we campaign AIDS programme and pulse polio in a different places of Howrah district. We have observed that there is no nursing training school in the Howrah district. Our organization going to launch a nursing school side by side of Pally Janaswastha Kendra. People of the community of Howrah district is totally deprived from health service so it is crying need to run a nursing school of emergent basis so as to the community people may get the health service to the door to door. Specially pregnant mothers get no treatment of pre- natal and post-natal during pregnancy period and even the pregnant mother give birth child under untrained midwife result which either mother or baby expired for ignorance of midwife . Our organization already arranged nursing training by the help of St. John. Ambulance Association & Red Cross Society of Howrah."
        },
        {
            title: "REEMA DISABLED CHALLENGED ACADEMY",
            content: "They can also learn. They can also communicate. Their communications and articulation abilities may not be strong as a normal person, but if the education and training is imparted to them with the proper skills and support. We help them with all challenges in life, Chiranabin has started the mentally challenged academy in its premises at Parbakshi. Special educator of the organization impart them training on cognitive and connective learning, personal care taking, self help, socialization etc through didactic apparatus.  Music and rhymes training are imparted to them for improving their spoken ability, tonal quality. Their expression pattern is increased through drawing and painting. Chiranabin has got approval of becoming Resources Organization of integrated education for disabled and Chiranabin express thanks to Sarba Siksha Mission Howrah for recognizing the Chiranabin as resource Organization. The same would facilitate the integration of disabled Girls and Boys in the main stream of education process at primary level. At present the Special educator has been engaged in the Special School."
        },
        {
            title: "PALLY JANA SWATHA KENDRA",
            content: "We stated Rural Health services from August 1994 with the help of German Doctors Association . Organization is most remote & poorly serviced area with multifold health problem throughout the year. Our outdoor & community base health services are just small drives to eliminate the health hazards of nearly 42000 population. The services provided by our RCH are immunization Pulse Polio , Health Check-up , Health & Hygiene & awareness . 5 health worker & 2 doctors are rendering most efficient within the reach of under privileged rural mass."
        },
        {
            title: "YOUTH WELFARE CULTURAL PROGRAMME",
            content: "On the occasion of various festival dates, the Organization organizes cultural program. During this 6 (six) such program were conducted where students & non-students groups participated the large programs. The cultural issues have identified some extra ordinary talents in music, dance and acting. The program included sit & draw competition, debate, extempore, vocal music, recitation, drama-yoga competition etc. In 6 cultural programs total number of participants were 200 and Audience were 4000 only."
        },

        {
            title: "GAMES AND SPORTS:",
            content: "During this year, we are organizing annual sports and prize giving ceremony at our organization premises Chiranabin play ground for Primary School boys & our own beneficiaries. 90 Participants attend the sports competition. Many dignitaries came and extend their co-operation in organizing this event. There are many events in the programs viz. Long Jump, High Jump, Run, Musical Chair and others but the most important event was tag of war in between male & female beneficiaries of Day Care Centre and also Volley Ball competition was played in between Committee & Staffs After several representations award giving ceremony was organized the day. All became happy."
        },
        {
            title: "Help to the Poor Students",
            content: "The organization spent money for the needy poor students. Last year this organization provided pecuniary help to 50 needy students for their education purpose."
        },
        {
            title: "Children Recreation",
            content: "10 bands (1 unit) offered to youth Organizations for the recreation as well as making of character and discipline."
        },
        {
            title: "Mentor Club under N.Y.K",
            content: "Mentor club is generally established for youth development. It is a autonomous body of Central Govt. under Youth affairs & Sports. The main object of mentor club for youth development. Two mentor club is in the one Block . The main function of mentor club will support development of small club which affiliated with N.Y.K."
        },
        {
            title: "ASSISTANT TO DISABLED PERSONS FOR PURCHASING AIDS AND APPLIANCES: (ADIP)",
            content: " CHIRANABIN has arranged mobilization camp on prevention and protection of disable persons in this year and promote sociol-psychological support through regular counseling. NGO has provided aids and appliance i.e. two wheel chairs, three try-cycle, ten walking sticks, two steel crutches to the disable persons from our organization own fund."
        },
        {
            title: "Pollution Control",
            content: "Organization observed the World Environment Day on 5th June 2012 accordingly. On this very day NGO arranged seminar in the premises of Chiranabin and also organized rally, gathering in the different places of different villages to aware the people against Environmental Pollution."
        },
        {
            title: "Pulse Polio Program",
            content: "Many millions more were being left deaf, blind or crippled by polio and measles. Against this background the organization set the goal of complete immunization of 85% of rural children. We organized 03 camps at the different villages with 08 volunteers by the help of Health Department, Govt. of West Bengal and helped by Rotary Club of Howrah."
        },
        {
            title: "DEMAND REDUCTION PROGRAMME FOR TAKING UP HIV/AIDS",
            content: "Working in the Drug De-Addiction Centre, realizing that there is a co-relation between substance use and HIV/AIDS, we are engaged in a Demand Reduction Programme for Taking up HIV/AIDS, under which we organize awareness camps and group meetings on HIV/AIDS among the truck drivers beside NH-6, brick field labors and the deserted women of the remote village. The referral services to the HIV/AIDS affected patient also done by us. The preventive measures and the risk factors of this fatal disease must be highlighted in the camp. The necessity of this project to prevent this fatal disease in the rural area is highly highlighted by the gatherings of the camps and group meeting and the quarries among the local people in the discussion session of our programme."
        },
    ]

    return (
        <div className="flex-1 w-full">

            {/* Title */}
            <div className="flex-col items-center text-center mb-3">
                <h1 className="text-4xl font-bold my-2">Activity</h1>
                <h2 className="text-2xl">Our Project View On Institutional Care</h2>
            </div>

            {/* first card */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-full dark:border-gray-700 dark:bg-gray-800 mb-4">
                <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Observation Home For JCL Boys</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We have started Observation home in the year 2012, January.The all J.C.L Boys of observation home under J.J.act of I.C.P.S are involved with various kind of antisocial activities . The main object of the Govt. is to correct the life of criminal boy by care protection and love white view to bring them in the main stream of life so that the J.C.L Boys may stand at their won fit and prosper in future life. We have already admitted two J.C.L boys in the school. Beside this we have also engaged arts and craft teacher for unschooled J.C.L boys. There is an all arrangement of playing football, volley ball, cricket.14 staff has been engaged to look after the J.C.L Boys. Food clothes are regular supply to the J.C.L Boys and medical treatment are properly done by regd. medical practitioner. Thanks to Govt. of W.B. & Govt. of India for financial assistance.</p>
                </div>
                <Image className="object-cover w-full rounded-b-lg h-auto sm:h-auto sm:w-52 sm:rounded-none sm:rounded-e-lg" width={200} height={200} src='/Photos/Group_boys.webp' alt="image of people" />
            </div>

            {/* second card */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:flex-row sm:max-w-full dark:border-gray-700 dark:bg-gray-800 mb-4">
                <Image className="object-cover w-full rounded-b-lg h-auto sm:h-auto sm:w-52 sm:rounded-none sm:rounded-s-lg" width={200} height={200} src="/Photos/Playing_cricket.webp" alt="image of people playing cricket" />
                <div className="flex flex-col p-4 leading-normal order-first sm:order-last">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CHILDREN AND AFTER CARE HOME FOR WOMEN & GIRLS OF ICPS UNDER j.j. act</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are running the children home from the year 1998.We at first started the children home (formerly shelter home) with limited MR girls now its strength has reached to the 167. Forty two staffs have been engaged to look after MR girls. There are two categories inmates i.e. mild and moderate .The inmates are homeless parent less, and have no identity. The inmates come from CWC. When the inmates come to the children home they were ill faded and ill clad, and feeble. They cant eat individually and wear garments .Now they are vivacious for proper treatment care protection food lodging etc. It is our great pleasure that we have able retained about 42 inmates to the mother lap. We have made and arrangement of education, recreation, V.T so that the inmates may get relief from monotonous life and enjoy recreation by way of song, music under the guidance of musician and also arrangement of tailoring sewing so that the inmates may be self supported. Special educator teaches the mild category inmates with great care and attentively. It is found the inmates are developing gradually improve in studies, dancing, song and recitation. Inmates participate in the different programmers of our organization. Thanks to Govt. of W.B. & Govt. of India for financial assistance.</p>
                </div>
            </div>

            {/* title */}
            <div className="flex-col items-center text-center my-8 border-b">
                <h2 className="text-4xl my-2 font-bold">Our Achievements</h2>
            </div>

            {/* starting card Carousel */}
            <div className="m-auto pt-2 my-4">
                <MultiCardCarousel cards={cards} />
            </div>

            {/* Future plans and other personnel  */}
            <section className="flex flex-col sm:justify-evenly border-t sm:flex-row sm:max-w-full dark:border-gray-700 dark:bg-gray-800 pt-12 mb-4">

                {/* future plans */}
                <div className="bg-white border border-gray-200 rounded-lg shadow mb-4 sm:w-2/5 p-6">
                    <header className="text-3xl font-bold text-center mb-3">Future Plans</header>
                    <p className="max-w-md space-y-1 text-base dark:text-gray-400 mb-10 text-center">
                        As we look to the future, we're committed to constantly improving and expanding our impact. At Chiranabin, we believe in pushing boundaries and trying new approaches to better serve our community. Your donations play a crucial role in bringing our future plans to life. With your support, we can implement exciting new initiatives, reach more people in need, and create lasting change. Here's a glimpse of what we're working towards:
                    </p>
                    <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>Special School for disable children</li>
                        <li>V.T. centre for disable children</li>
                        <li>Primary Basic Training collage</li>
                        <li>Hospital & Nursing Training College</li>
                        <li>Play ground development</li>
                        <li>Screen Printing centre</li>
                        <li>Rural cancer detection and management centre</li>
                        <li>Mini indoor stadium & recreational centre</li>
                        <li>Awareness camp on pollution of environment</li>
                        <li>Development of Integrated Training Centre</li>
                    </ul>
                </div>

                {/* other personnel */}
                <div className="bg-white border border-gray-200 rounded-lg shadow mb-4 sm:w-2/5 p-6">
                    <header className="text-3xl font-bold text-center mb-3">Other Personnel</header>
                    <p className="text-lg underline">Advocate:</p>
                    <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>Mr. Dilip Kr. Ghosh. (M.A.L.L.B)</li>
                        <li>Mr. Swapan Banerjee (B.Com. LL.B.)</li>
                        <li>Mr. Timirbaran Mandal (B.Com. L.L.B.)</li>
                    </ul>
                    <p className="text-lg underline">Medical Practitioner:</p>
                    <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>Dr. Banamali Samanta. M.B.B.S(Cal.)</li>
                        <li>Dr. Chaitali Ghosh, M.B.B.S.(Cal.)</li>
                    </ul>
                    <p className="text-lg underline">Engineer:</p>
                    <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>Mr. Chittaranjan Mandal</li>
                        <li>Mr. Panchanan Haldar</li>
                    </ul>
                    <p className="text-lg underline">Banker:</p>
                    <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>(LOCAL) State Bank of India. Banitabla Br., Howrah Maidan United Bank of India, Bagnan Br.</li>
                        <li>(FOREIGN) Br. State Bank of India. Uluberia Br. (F.C.R.A.)</li>
                    </ul>
                    <p className="text-lg underline">AUDITORS NAME AND ADDRESS Sambhunath De & Co.:</p>
                    <p className="max-w-md space-y-1 text-base dark:text-gray-400">
                        Chartered Accountants
                    </p>
                    <p className="max-w-md space-y-1 text-base dark:text-gray-400">
                        Emerald House, 3rd Floor, 1B, Old Post Office street Kolkata-700001
                    </p>
                    <p className="max-w-md space-y-1 text-base dark:text-gray-400">
                        E-mail:-sambhundeco@yahoo.co.in
                    </p>
                </div>
            </section>
        </div>
    )
}
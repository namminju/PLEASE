import React, { useEffect, useState } from "react";
import styles from "./Main.module.css"; // Import the CSS module

// 타이핑 효과를 위한 컴포넌트
function TypingEffect({ text, typingSpeed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentIndex, text, typingSpeed]);

  // 개행 문자(\n)를 처리하여 JSX로 변환
  const formattedText = displayedText.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={styles.typingContainer}>
      <span>{formattedText}</span>
      {/* 커서를 글씨 뒤에 동적으로 배치 */}
      <span className={styles.cursor} />
    </div>
  );
}
function ProjectSection({ image, title, date, description }) {
    return (
      <div
        style={{
          width: "80%",
          height: "500px", // 높이를 고정
          padding: "1vw 50px",
       
          display: "flex",
          alignItems: "center",
          marginBottom: "1.5vw",
          marginTop: "1.5vw",
          borderRadius: "2vw",
          position: "relative", // 제목을 이미지 위에 올리기 위해 relative 위치 설정
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "100%", // 이미지 높이가 부모의 높이에 맞게 설정
            width: "30%", // 이미지의 너비를 조정, 필요에 따라 수정 가능
            borderRadius: "10px",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              zIndex:"-1",
              height: "100%", // 부모 div의 height에 맞춰 이미지 높이 조정
              objectFit: "cover", // 이미지를 부모 영역에 맞게 크기 조정
              borderRadius: "10px",
            }}
          />
        </div>
        <div style={{ marginLeft: "1.2rem", fontSize: "1.2rem", flex: 1, width:"50%" }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign:"left", width:"100%" }}>{title}</div>
          <div style={{ fontSize: "1rem", textAlign:"left"}}>{date}</div>
          <div style={{  fontSize: "1rem",background:"white", color:"black", borderRadius:'10px', padding:"5% 2%"}}>{description}</div>
        </div>
      </div>
    );
  }
  
// 스킬 항목을 반복할 함수
function SkillSection({ image, title, skills }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        style={{
          height:"154px",
          padding:"1vw 50px",
          backgroundColor:"white",
          display: "flex",
          alignItems: "center",
          marginBottom: "1.5vw",
          marginTop: "1.5vw",
          borderRadius: "2vw",
          position: "relative", // 제목을 이미지 위에 올리기 위해 relative 위치 설정
        }}
      >
        <div
          style={{
            display:'flex',
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "10%", // 이미지 크기 조정

            borderRadius:'10px'
            
          }}
          onMouseEnter={() => setIsHovered(true)} // 마우스가 이미지에 들어갔을 때 제목 표시
          onMouseLeave={() => setIsHovered(false)} // 마우스가 이미지에서 나갔을 때 제목 숨기기
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%", // 이미지 크기 맞추기
              objectFit: "cover", // 이미지가 영역을 꽉 채우도록 설정
              transition: "0.3s ease-in-out", // 부드러운 전환 효과
              opacity: isHovered ? 0.1 : 1, // hover 시 이미지 어두워지기 (90% 어두워짐)
            }}
          />
          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "black", // 제목 색상
                textAlign: "center", // 제목 중앙 정렬
                zIndex: 1, // 이미지 위로 제목 배치
              }}
            >
              {title}
            </div>
          )}
        </div>
        <ul style={{ marginLeft: "1rem" }}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

// 메인 컴포넌트
function Main() {
  const skills = [
    {
      title: "Javascript (React)",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      skills: [
        "HTML, CSS와 함께 React를 사용하여 웹 페이지 제작 및 배포 경험이 있습니다.",
        "프론트엔드 개발 과정에서 컴포넌트 기반 설계와 상태 관리를 활용한 UI/UX 구현 가능합니다.",
      ],
    },
    {
      title: "Dart (Flutter)",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      skills: [
        "Flutter를 사용하여 크로스 플랫폼 모바일 애플리케이션 개발 경험이 있습니다.",
        "REST API와 연동하여 실시간 데이터 처리 및 사용자 중심의 UI/UX 설계를 수행할 수 있습니다.",
      ],
    },
    {
      title: "HTML & CSS",
      image: "https://i.ibb.co/xMzNYQt/htmlNcss.png",
      skills: [
        "HTML5와 CSS3를 사용하여 웹 페이지 레이아웃 설계 및 반응형 디자인 구현 경험이 있습니다.",
        "Flexbox와 Grid를 활용하여 효율적이고 깔끔한 레이아웃 구조를 만들 수 있습니다.",
        "웹 표준을 준수하고 크로스 브라우징을 고려한 스타일링이 가능합니다.",
      ],
    },
    {
      title: "C++",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/240px-ISO_C%2B%2B_Logo.svg.png",
      skills: [
        "기초적인 알고리즘 작성 및 텍스트 기반 프로그램 제작 경험이 있습니다.",
        "데이터 구조와 알고리즘을 활용하여 간단한 문제 해결 가능합니다.",
      ],
    },
    {
      title: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      skills: [
        "웹 크롤링 및 데이터 수집 자동화 작업 경험이 있습니다.",
        "scikit-learn 등의 머신러닝 라이브러리를 활용하여 예측 모델 개발 가능합니다.",
        "데이터 전처리, 시각화 및 결과 분석 능력을 보유하고 있습니다.",
      ],
    },
  ];
  const projects = [
    {
      title: "Eco$Back",
      date:"2023년 9월 - 2023년 12월",
      image: require('../assets/images/projectMainImage/ecoBack.png'),
      description: "React(Frontend)를 사용하여 텀블러 이용 시 포인트를 적립하고 관리할 수 있는 웹사이트를 개발했습니다. 사용자는 텀블러 사용량을 기록하고, 이를 통해 포인트를 적립하며, 적립된 포인트로 다양한 리워드를 받을 수 있는 시스템을 구현했습니다. 웹사이트는 직관적이고 사용자 친화적인 인터페이스를 제공하여 환경 보호 활동에 대한 참여를 유도합니다."
   },
    {
      title: "홀로 똑똑",
      date:"2024년 9월 - 2024년 12월",
      image: require('../assets/images/projectMainImage/holot.png'),
      description: "Flutter(Frontend)를 활용하여 독거노인을 위한 스마트케어 서비스 애플리케이션을 개발했습니다. 이 애플리케이션은 독거노인의 건강 상태를 모니터링하고, 정해진 알림을 전달하며, 정기적인 건강 체크를 통해 사용자의 안녕을 보장합니다. 또한, 사용자가 간편하게 의료 정보를 입력하고, 그에 맞는 맞춤형 서비스를 제공받을 수 있도록 설계되었습니다.",
    },
    {
      title: "Clean  Air",
      date:"2024년 3월 - 2024년 12월",
      image: require('../assets/images/projectMainImage/cleanAir2.png'),
      description: "React(Frontend)를 이용하여 실시간 공기질 모니터링 및 제어를 위한 관리자 웹사이트 및 스마트미러(모바일) 페이지를 개발했습니다. 이 웹사이트는 공기질 센서를 통해 실시간 데이터를 수집하고, 이를 시각적으로 분석하여 관리자가 강의실의 공기질 상태를 쉽게 이해할 수 있도록 돕습니다. 또한, 공기질이 나쁠 경우 관리자에게 메일이 전송됩니다. 위와 같은 기능을 통해 사용자에게 최적의 환경을 유지할 수 있도록 지원합니다. ",
    },
    {
        title: "Newsee",
        date:"2024년 9월 - 2024년 12월",
        image: require('../assets/images/projectMainImage/newsee2.png'),
        description: "Flutter(Frontend)로 뉴스 검색 및 개인화 기능을 제공하는 애플리케이션을 개발했습니다. 사용자는 자신이 관심 있는 주제를 설정하고, 해당 주제와 관련된 최신 뉴스를 실시간으로 검색하여 받아볼 수 있습니다. 또한, 플레이리스트를 만들어 다른 사람들과 공유하여 뉴스를 함께 볼 수 있도록 하여 뉴스를 더욱 가까이 할 수 있게 하고, 사용자 간의 정보 공유를 촉진합니다.",
      },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <TypingEffect
            text={`프론트엔드로 새로운 세상을 만드는\n남민주의 Portfolio입니다`}
            typingSpeed={100}
          />
        </div>
        <div className={styles.white}>
          <div style={{ width: "10%", textAlign: "center" }}>
            <div style={{ width: "100%", textAlign: "center" }}>About</div>
            <div>Me</div>
            <hr style={{ width: "70%", borderColor: "purple", borderWidth: "2px" }} />
          </div>
          <div className={styles.aboutContents} style={{ width: "80%" }}>
            <div style={{ fontSize: "1.5rem" }}>꾸준한 개발자</div>
            <div>
              <br />
              항상 맡은 일을 끝까지 해내려는 태도로 어려운 상황에서도 협업을 통해 문제를 해결하며 성과를 이끌어냅니다.
              <br />
              꾸준히 목표를 달성하는 데 집중하며 빠르지는 않지만 목표를 향해 한 걸음씩 나아가며 맡은 일을 완수하는 사람이 되고자 합니다.
            </div>
          </div>
        </div>
        <div className={styles.grey}>
          <div style={{ width: "10%", textAlign: "center" }}>
            <div style={{ width: "100%", textAlign: "center" }}>Skills</div>
            <hr style={{ width: "100%", borderColor: "purple", borderWidth: "2px" }} />
          </div>
          <div className={styles.aboutContents} style={{ width: "80%" }}>
            {skills.map((skill, index) => (
              <SkillSection key={index} image={skill.image} title={skill.title} skills={skill.skills} />
            ))}
          </div>
        </div>
        <div className={styles.project}>
          <div>Project</div>
          <hr style={{ width: "30%", borderColor: "purple", borderWidth: "2px" }} />
          <div>
            {projects.map((project, index) => (
              <ProjectSection
                key={index}
                image={project.image}
                date={project.date}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

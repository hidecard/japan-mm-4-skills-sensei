import React, { useState, useEffect, useCallback } from 'react';
import { JLPTLevel, SkillName, Lesson, UserProgress } from './types';
import { LEVELS, SKILLS, INITIAL_N5_LESSONS, INITIAL_N4_LESSONS, INITIAL_N3_LESSONS } from './constants';
import { SkillCard } from './components/SkillCard';
import { LessonViewer } from './components/LessonViewer';

const App: React.FC = () => {
  const [level, setLevel] = useState<JLPTLevel>('N5');
  const [skill, setSkill] = useState<SkillName>('Kana');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    level: 'N5'
  });

  // Get lessons based on level
  const getLessonsForLevel = (lvl: JLPTLevel): Lesson[] => {
    switch (lvl) {
      case 'N4':
        return INITIAL_N4_LESSONS;
      case 'N3':
        return INITIAL_N3_LESSONS;
      default:
        return INITIAL_N5_LESSONS;
    }
  };

  const allLessons = getLessonsForLevel(level);

  // Filter lessons based on selection
  const currentSkillLessons = allLessons.filter(l => l.skill === skill && l.level === level);
  const currentLesson = currentSkillLessons[currentLessonIndex];

  const handleCompleteLesson = useCallback(() => {
    if (currentLesson) {
      if (!progress.completedLessons.includes(currentLesson.lessonId)) {
        setProgress(prev => ({
          ...prev,
          completedLessons: [...prev.completedLessons, currentLesson.lessonId]
        }));
      }
    }

    if (currentLessonIndex < currentSkillLessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      // Loop back to first lesson when we reach the end
      setCurrentLessonIndex(0);
    }
  }, [currentLesson, currentLessonIndex, currentSkillLessons, progress]);

  const handleSkillChange = (newSkill: SkillName) => {
    setSkill(newSkill);
    setCurrentLessonIndex(0);
  };

  const handleLevelChange = (newLevel: JLPTLevel) => {
    setLevel(newLevel);
    setCurrentLessonIndex(0);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-xl">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h1 className="text-xl font-extrabold text-slate-800 tracking-tight hidden sm:block">
                Japan MM <span className="text-red-600">Sensei</span>
              </h1>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl">
              {LEVELS.map(l => (
                <button
                  key={l}
                  onClick={() => handleLevelChange(l)}
                  className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all ${
                    level === l ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Progress</p>
                <p className="text-sm font-bold text-red-600">{progress.completedLessons.length} Mastered</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Skill Selector Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-red-50 rounded-3xl p-6 border border-red-200 shadow-sm">
              <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-6 px-2">Choose Skill</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {SKILLS.map(s => (
                  <SkillCard
                    key={s.name}
                    name={s.name}
                    icon={s.icon}
                    color={s.color}
                    isSelected={skill === s.name}
                    onClick={() => handleSkillChange(s.name)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {currentLesson ? (
              <LessonViewer
                lesson={currentLesson}
                onComplete={handleCompleteLesson}
              />
            ) : (
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-red-100 flex flex-col items-center justify-center text-center space-y-4">
                <div className="text-6xl text-red-200"><i className="fa-solid fa-hourglass-start"></i></div>
                <h2 className="text-2xl font-bold text-red-800">No Content Ready</h2>
                <p className="text-red-600 max-w-md">The lessons for {level} {skill} are currently being developed.</p>
              </div>
            )}

            {/* Progress Summary for current skill */}
            <div className="mt-12">
               <div className="flex justify-between items-end mb-4 px-2">
                 <div>
                    <h4 className="font-bold text-red-800">{skill} Proficiency</h4>
                    <p className="text-sm text-red-600">Mastery level at {level}</p>
                 </div>
                 <span className="text-red-600 font-black">
                   {Math.min(100, Math.floor((currentLessonIndex + 1) / (currentSkillLessons.length || 1) * 100))}%
                 </span>
               </div>
               <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden shadow-inner">
                 <div
                   className={`h-full transition-all duration-1000 ease-out bg-red-600`}
                   style={{ width: `${Math.min(100, ((currentLessonIndex + 1) / (currentSkillLessons.length || 1)) * 100)}%` }}
                 ></div>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Mobile Nav (Quick level switch) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2 md:hidden z-40">
        <div className="flex justify-around items-center h-14">
           {LEVELS.map(l => (
             <button 
                key={l} 
                onClick={() => handleLevelChange(l)}
                className={`flex flex-col items-center space-y-1 ${level === l ? 'text-red-600' : 'text-slate-400'}`}
             >
               <span className="text-xs font-black">{l}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${level === l ? 'bg-red-600' : 'bg-transparent'}`}></div>
             </button>
           ))}
        </div>
      </nav>
    </div>
  );
};

export default App;


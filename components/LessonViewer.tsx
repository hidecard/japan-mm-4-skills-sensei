import React, { useState, useEffect } from 'react';
import { Lesson } from '../types';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
}

type LangMode = 'en' | 'mm' | 'both';

export const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onComplete }) => {
  const [showFurigana, setShowFurigana] = useState(true);
  const [langMode, setLangMode] = useState<LangMode>('both');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  // Check for speech synthesis support
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  // Speak function using Web Speech API
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP'; // Japanese language
      utterance.rate = 0.8; // Slightly slower for learning
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  // Stop speaking function
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
        {/* Controls Overlay */}
        <div className="absolute top-0 right-0 p-6 flex flex-wrap gap-2 justify-end">
          <div className="flex bg-slate-100 p-1 rounded-full text-[10px] font-bold">
            <button 
              onClick={() => setLangMode('en')}
              className={`px-2 py-1 rounded-full ${langMode === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            >EN</button>
            <button 
              onClick={() => setLangMode('mm')}
              className={`px-2 py-1 rounded-full ${langMode === 'mm' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            >MM</button>
            <button 
              onClick={() => setLangMode('both')}
              className={`px-2 py-1 rounded-full ${langMode === 'both' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            >ALL</button>
          </div>
          <button 
            onClick={() => setShowFurigana(!showFurigana)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
              showFurigana ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {showFurigana ? 'Furigana' : 'Kanji Only'}
          </button>
        </div>

        <div className="flex flex-col items-center text-center space-y-8 pt-8">
          {/* Main Lesson Text */}
          <div className="space-y-4 w-full">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">{lesson.title}</h2>

            <div className="min-h-[120px] flex flex-col items-center justify-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-800 leading-relaxed mb-4">
                {lesson.content.text}
              </p>
              {showFurigana && (
                <p className="text-xl md:text-2xl text-indigo-500 font-medium animate-in fade-in slide-in-from-top-2">
                  {lesson.content.furigana}
                </p>
              )}
            </div>

            {/* Listen Button */}
            {speechSupported && (
              <div className="pt-4">
                <button
                  onClick={() => isSpeaking ? stopSpeaking() : speak(lesson.content.text)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all ${
                    isSpeaking ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white`}
                  title={isSpeaking ? 'Stop listening' : 'Listen to pronunciation'}
                >
                  <i className={`fa-solid ${isSpeaking ? 'fa-stop' : 'fa-volume-high'}`}></i>
                </button>
              </div>
            )}
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          {/* Meaning Section */}
          <div className="space-y-3">
            {(langMode === 'en' || langMode === 'both') && (
              <p className="text-lg md:text-xl text-slate-600 italic">
                &ldquo;{lesson.content.meaning}&rdquo;
              </p>
            )}
            {(langMode === 'mm' || langMode === 'both') && lesson.content.meaningMm && (
              <p className="text-xl md:text-2xl text-indigo-600 font-medium leading-relaxed">
                &ldquo;{lesson.content.meaningMm}&rdquo;
              </p>
            )}
          </div>


        </div>
      </div>

      {/* Example Sentences Section */}
      {lesson.content.exampleSentences && lesson.content.exampleSentences.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4">Example Usage / အသုံးအနှုန်းပုံစံ</h3>
          <div className="grid gap-4">
            {lesson.content.exampleSentences.map((sentence, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                <p className="text-lg text-slate-700 font-medium">{sentence}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explanation Section */}
      {(lesson.content.explanation || lesson.content.explanationMm) && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 md:p-8 space-y-4 relative animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center space-x-3 text-indigo-700">
            <div className="w-8 h-8 rounded-lg bg-indigo-200 flex items-center justify-center">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h3 className="font-bold text-lg">Sensei's Note / ဆရာ့မှတ်စု</h3>
          </div>
          
          <div className="space-y-4 pl-11">
            {(langMode === 'en' || langMode === 'both') && lesson.content.explanation && (
              <p className="text-slate-700 leading-relaxed border-l-2 border-indigo-200 pl-4">
                {lesson.content.explanation}
              </p>
            )}
            {(langMode === 'mm' || langMode === 'both') && lesson.content.explanationMm && (
              <p className="text-indigo-900 font-medium leading-relaxed bg-white/50 p-4 rounded-xl">
                {lesson.content.explanationMm}
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Visual Indicator for Writing Practice */}
      {lesson.skill === 'Writing' && (
        <div className="bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl p-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-amber-700 mb-2">
            <i className="fa-solid fa-pen-fancy"></i>
            <p className="font-bold">Writing Practice / ရေးသားလေ့ကျင့်ခြင်း</p>
          </div>
          <p className="text-amber-800 text-sm">Grab your notebook! Try to write this sentence three times. / ဗလာစာအုပ်ထဲတွင် ၃ ကြိမ်ခန့် ရေးသားလေ့ကျင့်ပါ။</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onComplete}
          className="group px-10 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-200 transition-all flex items-center space-x-3 active:scale-95"
        >
          <span>Next Lesson / နောက်တစ်ခန်း</span>
          <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  );
};
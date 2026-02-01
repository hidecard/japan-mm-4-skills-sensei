# Task: Add 100 Lessons for Each Skill in constants.tsx

## Information Gathered
- The constants.tsx file contains lessons for 8 skills (Kana, Kanji, Vocabulary, Grammar, Listening, Speaking, Reading, Writing) across 3 levels (N5, N4, N3).
- Current lesson counts per skill (after first batch):
  - Kana: 45 (25 original + 20 added)
  - Kanji: 17
  - Vocabulary: 16
  - Grammar: 17
  - Listening: 8
  - Speaking: 8
  - Reading: 8
  - Writing: 10
- Lessons are structured in arrays like EXTRA_N5_LESSONS, EXTRA_N4_LESSONS, EXTRA_N3_LESSONS, and combined into INITIAL_N*_LESSONS.
- Each lesson has fields: level, skill, lessonId, title, content (text, furigana, meaning, meaningMm, explanation, explanationMm, exampleSentences).

## Plan
- Add additional lessons to the EXTRA arrays for each level and skill to reach a total of 100 lessons per skill.
- Distribute the additional lessons across the 3 levels proportionally.
- For each skill, calculate how many to add per level (updated):
  - Kana: 55 total remaining (25 N5, 15 N4, 15 N3)
  - Kanji: 83 total (28 N5, 28 N4, 27 N3)
  - Vocabulary: 84 total (28 N5, 28 N4, 28 N3)
  - Grammar: 83 total (28 N5, 28 N4, 27 N3)
  - Listening: 92 total (31 N5, 31 N4, 30 N3)
  - Speaking: 92 total (31 N5, 31 N4, 30 N3)
  - Reading: 92 total (31 N5, 31 N4, 30 N3)
  - Writing: 90 total (30 N5, 30 N4, 30 N3)
- Generate lesson content with appropriate titles, meanings, explanations in English and Myanmar, and example sentences.
- Append the new lessons to the respective EXTRA arrays.

## Progress
- Added 20 additional Kana lessons for N5.

## Dependent Files to be edited
- constants.tsx: Add new lessons to EXTRA_N5_LESSONS, EXTRA_N4_LESSONS, EXTRA_N3_LESSONS arrays.

## Followup steps
- After editing, run a search to verify the new lesson counts.
- Test that the file compiles without errors.
- Ensure the lessons are properly formatted and integrated.

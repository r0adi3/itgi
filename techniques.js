/* 
c1 Higher-Order Thinking Skills	
c2 Basic Academic Success Skills
c3 Discipline-Specific Knowledge and Skills	
c4 Liberal Arts and Academic Values
c5 Work and Career 
c6 Personal Development */

function Technique(id, name, page, c1, c2, c3, c4, c5, c6) {
	this.id = id;
	this.name = name;
	this.page = page;
	this.c1 = c1;
	this.c2 = c2;
	this.c3 = c3;
	this.c4 = c4;
	this.c5 = c5;
	this.c6 = c6;
//	this.relatedGoals();
}

var arPriorKnowledge = [1, 2, 3, 4, 5, 6, 7]; // prior knowledge, recall and understanding
var arCritThinking = [8, 9, 10, 11, 12]; // analysis and critical thinking
var arSynthesis = [13, 14, 15, 16, 17, 18]; // synthesis and creative thinking
var arProbSolving = [19, 20, 21, 22]; // skill in problem solving
var arApplication = [23, 24, 25, 26, 27]; // application and performance
var arAttitudesAndValues = [28, 29, 30, 31, 32]; // self-awareness of attitudes and values
var arAwarenessAsLearners = [33, 34, 35, 36]; //self-awareness as learners
var arLearningStudySkills = [37, 38, 39, 40]; // Course related skills, strategies, and behaviors
var arReactionsToTeachers = [41, 42, 43, 44, 45]; // Reactions to teachers and teaching
var arReactionsToActivities = [46, 47, 48, 49, 50]; //Learner reactions to class activities, assignments, and materials

var arTechniques = [
    [12, "Analytic Memos", 177, 1, 0, 0, 0, 1, 0, [2, 3, 15, 37, 38, 43]],
    [18, "Annotated Portfolios", 208, 1, 0, 1, 0, 1, 0, [1, 7, 20, 22, 42, 43]],
    [24, "Applications Cards", 236, 1, 0, 1, 0, 0, 0, [1, 4, 7, 16, 19, 26, 51]],
    [15, "Approximate Analogies", 193, 1, 1, 0, 1, 0, 0, [5, 7, 11, 19, 27, 51]],
    [49, "Assignment Assessments", 356, 0, 1, 0, 0, 0, 1, [16, 24, 50, 51]],
    [22, "Audio and Videotaped Protocols", 226, 1, 1, 1, 0, 0, 0, [1, 3, 16, 17, 22, 23, 24, 39, 43]],
    [1, "Background Knowledge Probe", 121, 0, 1, 1, 0, 0, 0, [11, 16, 18, 19, 32]],
    [8, "Categorizing Grid", 160, 1, 0, 1, 0, 0, 0, [2, 4, 11, 16, 18, 19]],
    [41, "Chain Notes", 322, 0, 1, 0, 1, 0, 1, [9, 10, 12, 16, 41, 44]],
    [45, "Classroom Assessment Quality Circles", 339, 0, 0, 0, 0, 0, 1, [4, 8, 24, 36, 37, 47, 50]],
    [28, "Classroom Opinion Polls", 258, 0, 0, 0, 0, 0, 1, [21, 27, 28, 35, 38, 46, 47, 52]],
    [16, "Concept Maps", 197, 1, 1, 1, 0, 0, 0, [4, 5, 6, 16, 19, 21, 27, 51]],
    [11, "Content, Form, and Function Outlines", 172, 1, 1, 0, 0, 0, 0, [2, 14, 15, 16, 24, 35, 51]],
    [32, "Course-Related Self-Confidence Surveys", 275, 0, 0, 0, 0, 1, 1, [30, 37, 38, 42, 45, 46, 48, 49]],
    [9, "Defining Features Matrix", 164, 1, 1, 0, 0, 0, 0, [2, 4, 11, 12, 14, 16, 18, 19]],
    [40, "Diagnostic Learning Logs", 311, 1, 0, 0, 0, 1, 0, [2, 3, 16, 22, 39, 42, 43, 44]],
    [23, "Directed Paraphrasing", 232, 0, 1, 0, 0, 1, 0, [1, 15, 16, 19, 37, 43]],
    [21, "Documented Problem Solutions", 222, 1, 1, 1, 0, 0, 0, [1, 3, 16, 17, 22, 23, 24, 39, 43]],
    [29, "Double-Entry Journals", 263, 0, 0, 0, 1, 0, 1, [14, 16, 21, 22, 26, 27, 46, 47, 51]],
    [42, "Electronic Mail Feedback", 327, 0, 0, 1, 0, 1, 0, [20, 24, 36, 37]],
    [4, "Empty Outlines", 138, 0, 1, 1, 0, 0, 0, [9, 10, 12, 16, 18]],
    [31, "Everyday Ethical Dilemmas", 271, 0, 0, 0, 1, 0, 1, [21, 25, 32, 35, 38, 46, 47, 52]],
    [50, "Exam Evaluations", 359, 0, 1, 0, 0, 0, 1, [16, 24, 50, 51]],
    [33, "Focused Autobiographical Sketches", 281, 0, 0, 0, 0, 1, 1, [30, 38, 42, 45, 46, 47, 48, 52]],
    [2, "Focused Listing", 126, 0, 1, 1, 0, 0, 0, [9, 10, 11, 12, 16, 18, 19]],
    [35, "Goal Ranking and Matching", 290, 0, 0, 0, 0, 1, 1, [21, 36, 42, 44, 46]],
    [44, "Group Instructional Feedback Technique", 334, 0, 0, 1, 1, 0, 1, [4, 24, 36, 50]],
    [47, "Group-Work evaluations", 349, 0, 0, 0, 0, 1, 1, [16, 36, 37, 38, 47, 50]],
    [26, "Human Tableau or Class Modeling", 244, 1, 0, 0, 1, 0, 0, [1, 5, 7, 31, 32, 36, 43]],
    [34, "Interest/Knowledge/Skills Checklists", 285, 0, 0, 0, 0, 1, 1, [22, 42, 44, 46, 52]],
    [17, "Invented Dialogues", 203, 1, 1, 1, 1, 0, 0, [4, 5, 7, 21, 23, 24, 25, 32]],
    [5, "Memory Matrix", 142, 0, 0, 1, 0, 0, 0, [11, 14, 16, 18, 19]],
    [6, "Minute Paper", 148, 0, 1, 1, 0, 0, 0, [5, 6, 9, 10, 12, 16, 18, 19]],
    [3, "Misconception/Preconception Check", 132, 0, 0, 1, 1, 0, 0, [8, 18, 19, 27, 50]],
    [7, "Muddiest Point", 154, 0, 1, 1, 0, 0, 0, [9, 10, 12, 16, 18, 19]],
    [13, "One-Sentence Summary", 183, 1, 1, 0, 0, 1, 0, [5, 11, 12, 14, 16, 22, 37, 43]],
    [27, "Paper or Project Prospectus", 248, 1, 1, 0, 0, 0, 0, [1, 5, 15, 16, 37]],
    [10, "Pro and Con Grid", 168, 1, 0, 0, 1, 0, 1, [2, 4, 24, 28, 35, 46, 51, 52]],
    [19, "Problem Recognition Tasks", 214, 1, 1, 1, 0, 0, 0, [1, 3, 16, 17, 22, 23, 43]],
    [39, "Process Analysis", 307, 1, 1, 0, 0, 0, 0, [16, 17, 20, 39, 43]],
    [37, "Productive Study-Time Logs", 300, 0, 0, 0, 0, 1, 1, [4, 16, 22, 37, 41, 44, 48, 52]],
    [30, "Profiles of Admirable Individuals", 267, 0, 0, 0, 1, 0, 1, [21, 25, 32, 35, 38, 46, 47, 52]],
    [38, "Punctuated Lectures", 303, 0, 1, 0, 0, 0, 1, [9, 10, 12, 16, 44]],
    [48, "Reading Rating Sheets", 352, 0, 1, 0, 0, 0, 1, [14, 16, 24, 50, 51]],
    [46, "RSQC2 (Recal, Summarize, Question, Comment, and Connect)", 344, 1, 1, 0, 0, 0, 1, [5, 9, 11, 16, 37]],
    [36, "Self-Assessment of Ways of Learning", 295, 0, 0, 0, 0, 0, 1, [21, 23, 30, 37, 42, 44, 46, 51]],
    [25, "Student-Generated Test Questions", 240, 0, 0, 1, 1, 0, 0, [1, 16, 18, 19, 24, 39, 43]],
    [43, "Teacher-Designed Feedback Forms", 330, 1, 0, 1, 0, 0, 1, [4, 24, 50]],
    [20, "What's the Principle?", 218, 1, 0, 0, 1, 0, 0, [1, 3, 16, 17, 22, 23, 24, 39, 43]],
    [14, "Word Journal", 188, 1, 1, 0, 0, 0, 0, [5, 6, 11, 12, 14, 16, 22, 43, 51]]
];
var goals = [
        [5, 41, "Improve ability to organize and use time effectively."],
        [5, 42, "Develop a commitment to personal achievement."],
        [6, 45, "Improve self-esteem/self-confidence."],
        [5, 43, "Develop ability to perform skillfully."],
        [6, 50, "Develop capacity to think for one's self."],
        [4, 29, "Develop a commitment to exercise the rights and responsibilities of citizenship."],
        [2, 13, "Improve speaking skills."],
        [4, 28, "Develop an informed concern about contemporary social issues."],
        [6, 49, "Cultivate an active commitment to honesty."],
        [2, 17, "Improve mathematical skills."],
        [4, 35, "Develop capacity to make informed ethical choices."],
        [6, 51, "Develop capacity to make wise decisions."],
        [5, 37, "Develop management skills."],
        [3, 24, "Learn to evaluate methods and materials in this subject."],
        [1, 2, "Develop analytic skills."],
        [6, 44, "Cultivate a sense of responsibility for one's own behavior."],
        [1, 8, "Develop ability to distinguish between fact and opinion."],
        [1, 6, "Develop ability to think holistically: to see the whole as well as the parts."],
        [2, 16, "Develop appropriate study skills, strategies, and habits."],
        [3, 18, "Learn terms and facts of this subject."],
        [4, 31, "Develop aesthetic appreciations."],
        [4, 34, "Develop an informed appreciation of other cultures."],
        [2, 15, "Improve writing skills."],
        [6, 46, "Develop a commitment to one's own values."],
        [2, 12, "Improve listening skills."],
        [3, 21, "Learn to understand perspectives and values of this subject."],
        [2, 10, "Develop ability to concentrate."],
        [6, 48, "Cultivate emotional health and well-being."],
        [5, 36, "Develop ability to work productively with others."],
        [4, 26, "Develop an appreciation of the liberal arts and sciences."],
        [2, 9, "Improve skill at paying attention."],
        [1, 7, "Develop ability to think creatively."],
        [5, 38, "Develop leadership skills."],
        [5, 40, "Improve ability to follow directions, instructions, and plans."],
        [3, 22, "Prepare for transfer or graduate study."],
        [4, 33, "Develop an informed understanding of the role of science and technology."],
        [2, 14, "Improve reading skills."],
        [1, 3, "Develop problem-solving skills."],
        [3, 23, "Learn techniques and methods used to gain new knowledge in this subject."],
        [4, 32, "Develop an informed historical perspective."],
        [1, 1, "Develop ability to apply principles and generalizations already learned to new problems and situations."],
        [4, 27, "Develop an openness to new ideas."],
        [3, 20, "Develop skill in using materials, tools, and/or technology central to this subject."],
        [3, 19, "Learn concepts and theories in this subject."],
        [1, 5, "Develop ability to synthesize and integrate information and ideas."],
        [6, 47, "Develop respect for others."],
        [5, 39, "Develop a commitment to accurate work."],
        [2, 11, "Improve memory skills."],
        [1, 4, "Develop ability to draw reasonable inferences from observations."],
        [3, 25, "Learn to appreciate important contributions to this subject."],
        [4, 30, "Develop a lifelong love of learning."]
    ];

var i;

// build goal objects to reference by name
function buildGoal(item) {
    for (i = 0; i < goals.length; i++) {
		this.cluster = goals[i][0];
		this.name = goals[i][1];
		this.desc = goals[i][2];
	}
}
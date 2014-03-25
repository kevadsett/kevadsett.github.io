(function() {
    var currentIssue=1, currentChapter=1,
        $backButton = $('a.blog-back'),
        $nextButton = $('a.blog-next'),
        $blogPosts = $('.blog-post'),
        $visibleBlog;

    function showBlog(issue, chapter, scroll) {
        currentIssue = parseInt(issue);
        currentChapter = parseInt(chapter);
        $visibleBlog = $('.blog-post[data-issue='+issue + ']').eq(chapter-1);
        $blogPosts.hide();
        $visibleBlog.show();
        if(scroll) $.scrollTo($visibleBlog, 300, {axis:"y"});
        $('a.chapter-link').parent().removeClass('active').eq(chapter-1).addClass('active');
    }

    function getIssueLength(issue) {
        return chaptersInCurrentIssue = $('.blog-post[data-issue='+issue+']').length;
    }

    function determineBlogNavVisibility() {        
        switch (currentChapter) {
            case 1:
                $backButton.addClass('hidden');
            case getIssueLength(currentIssue):
                $nextButton.addClass('hidden');
            break;
            default:
                if($backButton.hasClass('hidden')) {
                    $backButton.removeClass('hidden');
                }
                if($nextButton.hasClass('hidden')) {
                    $nextButton.removeClass('hidden');
                }
            break;
        }
    }

    $('a.issue-link').on('click', function(event) {
        event.preventDefault();
        var $chapters = $(event.target).siblings();
        toggleItem($chapters);
    });

    $('a.chapter-link').on('click', function(event) {
        event.preventDefault();
        if(!$(event.target).parent().hasClass('active')) {
            var issue = $(event.target).attr('data-issue'),
                chapter = $(event.target).attr('data-chapter');
            $('.blog-nav').removeClass('hidden');
            showBlog(issue, chapter);
            determineBlogNavVisibility();
        }
    });

    $backButton.on('click', function(event) {
        event.preventDefault();
        showBlog(currentIssue, currentChapter-1, true);
        determineBlogNavVisibility();
    });

    $nextButton.on('click', function(event) {
        event.preventDefault();
        showBlog(currentIssue, currentChapter+1, true);
        determineBlogNavVisibility();
    });
}());
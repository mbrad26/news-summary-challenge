(function () {
  class HeadlinesListViewDouble {
    addHTMLTags() {
      return '<div><ul><li>Important headline</li></ul></div>';
    }
  }

  let headlinesListView = new HeadlinesListViewDouble();
  let controller = new Controller(headlinesListView);

  function testInstantiatesWithAHeadlinesListView() {
    assert.isTrue(controller.view === headlinesListView);
  }

  function testInsertView() {
    controller.insertView();
    let element = document.getElementById('headlines');

    assert.isTrue(element.innerHTML === headlinesListView.addHTMLTags());
  }

  function testChangeToHeadlinePage() {
    let url = window.location.href;
    document.getElementById('5').click();

    assert.isTrue(window.location.href !== url);
  }

  testInstantiatesWithAHeadlinesListView();
  testInsertView();
  testChangeToHeadlinePage();
})();

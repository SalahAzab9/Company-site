import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/esm/popper.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

let modalId = $('#image-gallery');

$(function(){
    $(".thumbnail1").hover(function(){
        $(this).find(".project-category").hide();
        $(this).find(".caption1").slideDown(250);
    },
    function(){
        $(this).find(".project-category").show();
        $(this).find(".caption1").slideUp(250);
    });

    var pathname = window.location.pathname;
    if(pathname == '/'){
      pathname = "/index.html";
    } ;
    // هنا عشان نحل مشكلة ان مسار الصفحة الرئيسية مش بيتحدد او يكون جذر لما نيجي نشغل المشروع حددنا المسار كان ايه وظهر انه كان علامة السلاش دي فغيرنا لمسار الصفحةالرئيسية 
    


    // المتغير ده حيتسجل فيه المكان اللي مفتوح علي الموقع اي اسم الصفحة اللي مفتوحة علي الموقع مع العلم بيكون قبلها علامة/ عشان كدة غيرنا اسم الصفحات كلها في الهريف بتاعها وخلينا قبليه /
    // كأني بقول للمتصفح هات الباث نيم بتاع الوكيشن اللي هو موجود فيه
    $('.navbar-nav > li > a[href="'+ pathname +'"]').parent().addClass("active");

    // اضافة الصنف الفعال للصفحات المتعلقة بصفحة البلوجز
    if( pathname == "/blog-details.html" || pathname== "/add-blog.html"){
      $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass("active");
    };
    // اضافة الصنف الفعال للصفحات المتعلقة بصفحة المشاريع
    if( pathname == "/project-details.html"){
      $('.navbar-nav > li > a[href="/projects.html"]').parent().addClass("active");
    };

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
});

var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year ;

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


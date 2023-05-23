from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_homepage),
    path('signup/', views.usersignupfunction),
    path('user/login/', views.userloginfunction),
    path('user/curruser/', views.curr_user),
    path('user/logout/', views.userlogout),
    path('gamescreen/', views.gamescreen),
    path('pluslevel/', views.pluslevel),
    path('minuslevel/', views.minuslevel),
    path('profile/user/changeEmail/', views.changeemail),
    path('profile/user/changePassword/', views.changepassword),
    path('profile/user/changePicture/', views.changepicture),
    path('profile/', views.profile),
    path('test/', views.test),
    path('mainmenu/', views.mainmenu),

]
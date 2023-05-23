from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import User
from django.core.serializers import serialize
from django.contrib.auth import authenticate, login, logout
import json

def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["POST", "GET"])
def gamescreen(request):
    # print(request)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
    # email = request.data['email']
    # password = request.data['password']
    # name = request.data['name']
    # # # super_user = False
    # # # staff = False
    # # # if 'super' in request.data:
    # # #     super_user = request.data['super']
    # # # if 'staff' in request.data:
    # # #     staff = request.data['staff']
    # try:
    #     newuser = User.objects.create_user(username = email, email = email, name = name, password = password)
    #     newuser.save()
    #     return JsonResponse({"success":True})
    # except Exception as e:
    #     print(e)
    #     return JsonResponse({"success": False})

@api_view(["POST", "GET"])
def userlogin(request):
    # print(request)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["POST", "GET"])
def userloginfunction(request):
    print(request.data)
    email = request.data['email']
    password = request.data['password']
    print (email)
    print(password)

    user = authenticate(username = email, password = password)
    print(user)
    if user is not None and user.is_active:
        try:
            print("maybe loginworked?")
            login(request._request, user)
            return JsonResponse({'login':True})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})


@api_view(["GET"])
def curr_user(request):
    newUser = request.META.get('HTTP_COOKIE')
    newUser = newUser[10:]

    if request.user.is_authenticated:
        print(request.user)
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['username', 'firstname', 'level', 'profile_image'])
        # print(user_info)
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":newUser})
    
    
@api_view(['POST'])
def userlogout(request):
    try:
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})
    
@api_view(["POST", "GET"])
def usersignupfunction(request):
    print(request.data)
    email = request.data['email']
    password = request.data['password']
    firstname = request.data['firstName']
    lastname = request.data['lastName']
    try:
        newuser = User.objects.create_user(username = email, email = email, firstname = firstname, password = password, lastname = lastname)
        print(newuser)
        newuser.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
@api_view(['POST'])
def pluslevel(request):
    try:
        updatelevel = User.objects.get(username=request.user.username)
        updatelevel.level = updatelevel.level + 1
        print(updatelevel.level)
        updatelevel.save()
        print(updatelevel.level)
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})

@api_view(['POST'])
def minuslevel(request):
    try:
        updatelevel = User.objects.get(username=request.user.username)
        updatelevel.level = updatelevel.level - 1
        print(updatelevel.level)
        updatelevel.save()
        print(updatelevel.level)
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
@api_view(["POST", "GET"])
def profile(request):
    # print(request)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def changeemail(request):
    try:
        updateemail = User.objects.get(username=request.user.username)
        newemail = request.data['email']
        updateemail.email = newemail
        updateemail.username = newemail
        print(updateemail.email)
        updateemail.save()
        print(updateemail.email)
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
# @api_view(['POST'])
# def changepassword(request):
#     try:
#         updatepassword = User.objects.get(username=request.user.username)
#         newpassword = request.data['password']
#         updatepassword.password = newpassword
#         print(updateemail.email)
#         updateemail.save()
#         print(updateemail.email)
#         return JsonResponse({'success': True})
#     except Exception as e:
#         print(e)
#         return JsonResponse({"success": False})
    
@api_view(['POST'])
def changepassword(request):
    try:
        passwordChange = request.data['password']
        userProfile = User.objects.get(password=request.data['oldPassword'])
        userProfile.set_password = passwordChange
        userProfile.save()
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})
    

@api_view(['POST'])
def changepicture(request):
    try:
        print(request.user.profile_image)
        image = request.data['profile_pic']
        userProfile = User.objects.get(username=request.user.username)
        print(userProfile)
        userProfile.profile_image = image
        userProfile.save()
        return JsonResponse({'success': True})
    except Exception as e:
        print(e)
        return JsonResponse({'success': False})


    # path('user/changeEmail/', views.changeemail),
    # path('user/changePassword/', views.changepassword),
    # path('user/changePicture/', views.changepicture),
    # path('profile/', views.profile),

# animeNote = Anime_list.objects.get(user = request.user, title=request.data['title'])
#         print(animeNote.personal_notes)
#         animeNote.personal_notes = request.data['note']
#         animeNote.save()

@api_view(["POST", "GET"])
def test(request):
    # print(request)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["POST", "GET"])
def mainmenu(request):
    # print(request)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
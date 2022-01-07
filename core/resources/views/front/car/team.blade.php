@extends('front.car.layout')

@section('pagename')
 - {{__('Team Members')}}
@endsection

@section('meta-keywords', "$be->team_meta_keywords")
@section('meta-description', "$be->team_meta_description")

@section('breadcrumb-title', convertUtf8($bs->team_title))
@section('breadcrumb-subtitle', $bs->team_subtitle)
@section('breadcrumb-link', __('Team Members'))

@section('content')

		<!-- Start finlance_team section -->
		<section class="finlance_team team-page team_v1 gray_bg pt-115 pb-80">
			<div class="container">
				<div class="team_slide">
                    <div class="row">
                        @foreach ($members as $key => $member)
                            <div class="col-lg-3 col-md-6 mb-5">
                                <div class="grid_item">
                                    <div class="grid_inner_item">
                                        <div class="finlance_img">
                                            <img class="lazy" data-src="{{asset('assets/front/img/members/'.$member->image)}}" class="img-fluid" alt="">
                                            <div class="team_overlay">
                                                <ul class="social_box">
                                                    @if (!empty($member->facebook))
                                                        <li><a href="{{$member->facebook}}" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                                    @endif
                                                    @if (!empty($member->twitter))
                                                        <li><a href="{{$member->twitter}}" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                                    @endif
                                                    @if (!empty($member->linkedin))
                                                        <li><a href="{{$member->linkedin}}" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                                    @endif
                                                    @if (!empty($member->instagram))
                                                        <li><a href="{{$member->instagram}}" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                                    @endif
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="finlance_content" style="background-image: url({{asset('assets/front/img/pattern_bg.jpg')}});">
                                            <h4>{{convertUtf8($member->name)}}</h4>
                                            <p>{{convertUtf8($member->rank)}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
				</div>
			</div>
		</section>
		<!-- End finlance_team section -->
@endsection

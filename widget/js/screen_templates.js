var templates = {};
templates.screen_checkin = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"gig-outerbox\">");_.b("\n" + i);_.b("	<div class=\"gig-widbox\">");_.b("\n" + i);_.b("		<h3 class=\"gig-widtitle\">");_.b("\n" + i);_.b("			<img src=\"");_.b(_.v(_.f("user_image",c,p,0)));_.b("\" alt=\"\" class=\"img_floatLeft gig-avatar\">");_.b("\n" + i);_.b("			");_.b(_.v(_.f("name",c,p,0)));_.b("\n" + i);_.b("		</h3>");_.b("\n" + i);_.b("		<p class=\"gig-checkedin\">just checked in</p>");_.b("\n" + i);_.b("	</div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.screen_image = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"gig-outerbox\">");_.b("\n" + i);_.b("	<div class=\"gig-widbox gig-widimgbox\">");_.b("\n" + i);_.b("		<img src=\"");_.b(_.v(_.f("thumb_photo",c,p,0)));_.b("\" alt=\"\">");_.b("\n" + i);_.b("		<div class=\"gig-imgauthor\">");_.b("\n" + i);_.b("			<h3 class=\"gig-widtitle\">");_.b("\n" + i);_.b("				<img src=\"");_.b(_.v(_.f("user_image",c,p,0)));_.b("\" alt=\"\" class=\"img_floatLeft gig-avatar\"/>");_.b("\n" + i);_.b("				");_.b(_.v(_.f("name",c,p,0)));_.b("\n" + i);_.b("			</h3>");_.b("\n" + i);_.b("		</div>");_.b("\n" + i);_.b("	</div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.screen_post = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"post gig-outerbox\">");_.b("\n" + i);_.b("	<div class=\"gig-widbox\">");_.b("\n" + i);_.b("		<p>");_.b(_.v(_.f("text",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("		<h3 class=\"gig-widtitle\">");_.b("\n" + i);_.b("			<img src=\"");_.b(_.v(_.f("user_image",c,p,0)));_.b("\" alt=\"\" class=\"img_floatLeft gig-avatar\">");_.b("\n" + i);_.b("			");_.b(_.v(_.f("name",c,p,0)));_.b("\n" + i);_.b("		</h3>");_.b("\n" + i);_.b("	</div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
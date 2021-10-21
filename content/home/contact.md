+++
# Contact widget.
widget = "contact"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = false  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 130  # Order that this section will appear.

title = "Contact"
subtitle = "Get in touch!"

# Automatically link email and phone?
autolink = true

# Email form provider
#   0: Disable email form
#   1: Netlify (requires that the site is hosted by Netlify)
#   2: formspree.io
email_form = 0

+++

<form action="https://formspree.io/xvodnapg" method="POST">
  <label for="name">Nome: </label>
  <input type="text" name="name" required="required" placeholder="nome"><br>
  <label for="email">Email: </label>
  <input type="email" name="_replyto" required="required" placeholder="email"><br>
  <label for="message">Mensagem:</label><br>
  <textarea rows="4" name="message" id="message" required="required" class="form-control" placeholder="Entre em contato!"></textarea>
  <input type="hidden" name="_next" value="/html/thanks.html" />
  <input type="submit" value="Send" name="submit" class="btn btn-primary btn-outline">
  <input type="hidden" name="_subject" value="Website message" />
  <input type="text" name="_gotcha" style="display:none" />
</form>

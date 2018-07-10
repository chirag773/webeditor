$('#form-submit').submit(function(e) {
	e.preventDefault();
	var runcode = $(this).serialize();

	$.post('/', toDoItem, function(data) {
		$('#editor').append(
				`
				<style>${data.css}</style>
				<div>${data.html}</div>
				<script>${data.javascript}</script>
				`
			)
	});
});

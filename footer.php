<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Underscores_Boilerplate
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'underscoresboilerplate' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'underscoresboilerplate' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'underscoresboilerplate' ), 'underscoresboilerplate', '<a href="https://automattic.com/" rel="designer">Surfing Chef</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<script src="http://localhost:35729/livereload.js"></script>

</script>
</body>
</html>
